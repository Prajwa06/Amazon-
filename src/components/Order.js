import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';

export default function Order(props) {
    const {order}=props;
    const{id,data}=order;
    const{name ,address,timestamp,items,total}=data;
    const item=JSON.parse(items);
    const user=useSelector(selectUser);
    console.log(user);
    

  return (
    <div className='relative border rounded-t w-full'>
        <div className=' flex items-center space-x-10 bg-gray-100 text-sm text-gray-600 p-5 '>
            <div>
                <p className='font-bold text-md my-2 '>ORDER PLACED </p>
                <p>{new Date(timestamp ?.seconds*1000).toLocaleString()}</p>
            </div>
            <div className='col-span-4'>
                <p className='font-bold my-2'>Total :- ₹ {total*80}  </p>
                <p className=''>Delivery expected in 7 days of shipping</p>
            </div>
            <p className='text-sm whitespace-nowrap sm:text-xl mx-auto  md:absolute md:top-10 md:right-5 self-end  flex-1 text-blue-500'>{item.length} item(s)</p>
            <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>ORDER #: {id}</p>
        </div>
        <div className='bg-gray-100  border border-t-0 rounded-b relative  w-full'>
            <p className='mx-5  text-gray-600 font-semibold'>Name: {name}</p>
            <p className='mx-5 text-gray-600 font-semibold'>Address: {address}</p>
        </div>
        
        <div className='p-5 sm:p-10 '>
                <div className='flex space-x-6 overflow-x-auto'>
                    {item.map((i)=>(
                        <img className='h-20 object-contain md:32' src={i.image} alt="ima" /> 
                    ))}
                </div>
        </div>
    </div>
  )
}
