import React from 'react'
import Tour from './Tour';


const Tours = ({tours}) => {
  return (
    <div>
      <p>Our Tours</p>
      <div className='underline'></div>

<div>
{tours.map((tour) => {
return(

   <Tour key={tour.id} {...tour}></Tour>  
 
)
})}

</div>




    </div>
  )
}

export default Tours;