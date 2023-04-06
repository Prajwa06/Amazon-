import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useNavigate } from 'react-router-dom';
export default function Success() {
    const navigate=useNavigate();
    const handleClick=()=> {
        navigate('/orders');
    }
  return (
    <div className="bg-gray-100 h-screen ">
        <main className='max-w-4xl mx-auto'>
            <div className='flex flex-col p-10 bg-white'>
                <div className='flex items-center space-x-2 mb-5'>
                    <CheckCircleIcon className='text-green-500 h-10'/>
                    <h1 className='text-3xl '>Thank,you your Order has been confirmed..!</h1>
                </div>
                <p className='my-5'>Thank you for shoping with us. We'll send a confirmation once your item is shipped, if you would like to check the status of your order(s) please press the link below </p>
                <button onClick={handleClick} className='button'> Go To My Orders</button>
            </div>
        </main>
    </div>
  )
}
