import React from "react";

const Card = ({ title, desc, img }) => {
  return (
    <div
      className="
        bg-white 
        shadow-md 
        rounded 
        p-10 
        mx-5 lg:m-0 
        hover:text-orange-600 
        lg:hover:-translate-y-5 
        transition-all 
        duration-300 
        cursor-pointer 
        flex flex-col 
        justify-start
        w-full
        h-full
        min-h-[320px]      /* FIXED height */
        min-w-[300px]      /* FIXED width */
      "
    >
      <div style={{ color: '#EA580C', fontSize: '36px' }}>
        {img}
      </div>

      <h1 className="lg:text-2xl text-lg font-semibold mt-3 mb-5">
        {title}
      </h1>

      <p className="lg:text-base text-sm text-zinc-700">
        {desc}
      </p>
    </div>
  );
};

export default Card;
