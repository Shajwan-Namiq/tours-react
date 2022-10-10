import React from 'react'
import Tour from './Tour';


const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div class="mt-5 relative flex px-5 lg:px-72 py-5 items-center">
        <div class="flex-grow border-t border-gray-800"></div>
        <span class="flex-shrink mx-4 font-bold text-2xl uppercase text-emerald-900">
          Our Tours
        </span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
       

      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </div>
  );
};

export default Tours;