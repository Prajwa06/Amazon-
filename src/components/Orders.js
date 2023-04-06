import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Order from './Order';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';

export default function Orders() {
    const[orders,setOrders]=useState([]);
    const user=useSelector(selectUser)
  useEffect(()=>{
    const q = query(collection(db, "orders"),orderBy("timestamp","desc"),where("email" ,"==",user.email));
      onSnapshot(q,(snapshot)=>{
          const temp=[];
          snapshot.forEach((doc)=>{
              temp.push({
                  id:doc.id,
                  data:doc.data()
              });
          });
          setOrders(temp);
      });
  },[]);
  return (
    <div>
      <main className='max-w-4xl mx-auto p-10 '>
            <h1 className='text-3xl border-b mb-2 pb-2 border-yellow-400'>{orders.length>0 ? "Your Orders" :"No Orders Yet..!"}</h1>
               {orders.map((order)=>( <Order key={order.id} order={order } />))} 
       </main>
      
    </div>
  )
}
