import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {/* toursをtourに分解して一つずつTourへidを渡す */}
        {tours.map((tour)=>{
          return(
            <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
          )
        }
        )}
      </div>
    </section>
  );
};

export default Tours;
