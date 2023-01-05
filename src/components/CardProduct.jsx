import React from "react";

const CardProduct = (props) => {
  return (
    <>
      {" "}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-0 md:py-8 px-5 md:px-10 lg:max-w-7xl">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-2 gap-y-10 gap-x-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {props.items.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-xs md:text-sm text-gray-700 font-bold">{product.name}</h3>
                <p className="mt-1 text-xs font-medium text-gray-900">{product.content}</p>
                <p className="mt-1 text-xs md:text-base font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
