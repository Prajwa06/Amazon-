import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../features/basketSlice'
import CheckoutProduct from './CheckoutProduct';

export default function Checkout() {
  const items=useSelector(selectItems);
  const total=useSelector(selectTotal);
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
            
              <>
                <h2 className='whitespace-nowrap mt-auto font-bold mb-2'>Subtotal {items.length} items:
                <span className='font-bold'> ₹ {total*80}</span>
                </h2>
                <button className='button mb-auto'>Procced to Payment</button>

              </>
            
          </div>)}
      </main>
    </div>
  )
}
