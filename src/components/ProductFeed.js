import React from "react";
import Product from "./Product";


export default  function ProductFeed(props) {
 
  const {products}=props;
  return (
    
    <div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols:3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {products.slice(0, 4).map((product) => {
          const { id, title, price, description, category, image } = product;
          return (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
      
      <img className=' sm:h-96 col-span-full object-contain w-full md:h-64' src="https://links.papareact.com/dyz"  alt=""/>

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => {
          const { id, title, price, description, category, image } = product;
          return (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
      </div>

      
        {products.slice(5).map((product) => {
          const { id, title, price, description, category, image } = product;
          return (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}
