import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../features/basketSlice';

export default function CheckoutProduct(props) {
    const dispatch=useDispatch();
    // eslint-disable-next-line
    const{ id,title, price, description, category, image}=props;
    const removeItem =()=>{
        dispatch(removeFromBasket({id}));
    }
  return (
    <div className='grid grid-cols-5 bg-white my-5'>
    <img src={image} className='object-contain h-52 w-52 ml-2' alt="" />
        <div className=' col-span-3 mx-5 mt-8'>
            <p className='text-base font-bold'>{title}</p>
            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <h3 className='text-xl font-semibold'>₹ {price*80}</h3>
        </div>
        <button className='button mt-auto mb-2 mr-2' onClick={removeItem} ><h3>Remove</h3></button>
    </div>
  )
}
