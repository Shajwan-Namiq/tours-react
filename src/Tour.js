import { useState } from "react"
import React from 'react'

 const Tour = ({id ,name,price ,info ,image}) => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-64 lg:py-20">
        <div className="   ">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={image} className="object-cover w-full h-64" alt="" />
            <div className="p-5  border border-t-0">
              <div class="mb-5 flex justify-between items-center">
                <span class="text-3xl font-bold text-green-900 ">{name}</span>
                <span class="text-xl font-bold text-green-900 bg-green-200   focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-5 py-2.5 text-center  dark:focus:ring-blue-800">
                  ${price}
                </span>
              </div>

              <p className="mb-2 text-gray-700">{info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Tour;