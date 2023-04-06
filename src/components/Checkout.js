import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../features/basketSlice'
import CheckoutProduct from './CheckoutProduct';
import { useNavigate } from "react-router-dom";
import { CardElement } from '@stripe/react-stripe-js';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { selectUser } from '../features/UserSlice';
import { db } from '../firebase';

export default function Checkout() {
  const items=useSelector(selectItems);
  const total=useSelector(selectTotal);
  const navigate=useNavigate();
  const[address, setAddress]=useState('');
  const[card, setCard]=useState('');
  const user=useSelector(selectUser);
  const orders= collection(db,"orders");
  const time=serverTimestamp();
  const handlePayment=async(e)=>{
    e.preventDefault();
    var orderItems = JSON.stringify(items);
    await addDoc(orders,{
      name:user.displayName,
      address:address,
      total:total,
      timestamp:time,
      items:orderItems,
      email:user.email,
});
     
     
      navigate("/success")
  }
 
 
 

  return (
    <div className='bg-gray-100'>
      <main className='lg:flex max-w-4xl mx-auto '>
      {/* left section */}
          <div className='flex-grow m-5 shadow-sm'>
            <img src="https://links.papareact.com/ikj"  className='object-contain p-1 ' alt="" />

            <div className='flex p-5 space-y-10 bg-white'>
              <h1 className='text-3xl border-b pb-4'>{items.length===0 ?"Cart is Empty..!  Please add Items" :"Your Shopping Cart"} </h1>
            </div>
            {items.map((item, i)=>{
                const {id,title,price,description,category,image}=item;
               return  (
                <CheckoutProduct
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  category={category}
                  description={description}
                  image={image}
                />
              )})}
          </div>


          {/* right section */}

          {items.length>0 && (
          <div className='flex flex-col px-10 m-5 py-3 bg-white shadow-md'>
            
              <div className='my-auto'>
                <h2 className='whitespace-nowrap mt-auto font-bold mb-2'>Subtotal {items.length} items:
                <span className='font-bold'> ₹ {total*80}</span>
                </h2>

                <form action="" onSubmit={handlePayment}>
                <div className='py-2'>

                      <h1 className='font-bold text-red-900'>Enter Address Details *</h1>
                    <input className='border w-full  rounded-md my-2 outline-none p-2' type="text" onChange={e=>(setAddress(e.target.value))} value={address} />
                  
                  
                </div>

                <div>
                  <h1 className='font-bold text-red-900'>Payment Details *</h1>
                  <p className='font-bold'>Card Number</p>
                  
                  <input className='border w-full  rounded-md my-2 outline-none p-2' type="text" onChange={e=>(setCard(e.target.value))} value={card} placeholder='0000 0000 0000 0000'/>
                  <p className='font-bold'>Validity</p> 
                  <div className='flex'>
                    <input className='border w-full mr-1  rounded-md my-2 outline-none p-2' type="text"  placeholder='MM/YYYY'/>
                    <input className='border w-full  ml-1 rounded-md my-2 outline-none p-2' type="text"   placeholder='CVV'/>
                  </div>
                    <button disabled={card.length===0 ||address.length===0  ? true: false} onClick={handlePayment} className='button w-full' > Make Payment</button>
                  
                 
                </div>
                
                </form>
            
            
                </div>
            
          </div>)}
      </main>
    </div>
  )
}
