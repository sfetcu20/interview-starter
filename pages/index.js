import React from 'react';
import { useState } from 'react';
import VATForm from './Components/VATForm'
const Page = () => {

//setvat(parseInt(e.target.value) * parseInt(rate)/100 + parseInt(e.target.value));
//setprice(parseInt(e.target.value)/(1+parseInt(rate)/100));
  //
  //price=vat/(1+rate/100)
  const handleSubmit=(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };
    fetch('https://somewhere.com/posts', requestOptions)
  }

  
  return (
    <div className='width-full bg-sand'>
      <div className='pad-x-2 pad-y-2 z-index flex align-x-center mg-auto bg-green border-black max-width-500 height-full flex-column width-full'>
      <div className='border-black flex flex-column text-center pad-x-2 pad-y-2'>
        <h2 className='font-dm trans-upper lt-spacing-5 color-transparent'>Index page</h2>
       <div>
          <i className="fas fa-music" />
          <i className="fas fa-music" />
          <i className="fas fa-music" />
       </div>
      </div>

      <div className='pad-y-2'>
        <VATForm handleSubmit={handleSubmit}/>
        
      </div>
    </div>
    </div>
    
  );
};

export default Page;
