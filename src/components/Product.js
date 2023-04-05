
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";


export default function Product(props) {
  const { title, price, description, category, image } = props;
  const [rating] = useState(Math.floor(Math.random()*5)+1);
  const[isPrime]=useState(Math.random()<0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 xsm italic">{category}</p>
      <img  className='h-72 object-contain' src={image} alt="" />
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return <StarIcon className="h-5 text-yellow-400" />;
          })}
      </div>
      <div>
      <p className="mb-5"><span>₹ </span><span>{Math.floor(price*80/2)}</span> </p>
          
      </div>
      {isPrime && 
      <div className="flex items-center space-x-2 -mt-5">
      <img className="w-12 " src="https://links.papareact.com/fdw" alt="Prime"/>
      <p className="text-xs text-grey-500">Free-Nextday Delivery</p>
      </div>
      }
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <button className="button mt-auto"> Add to Cart</button>
     
    </div>
  );
}
