import React from 'react'
import { useState,useEffect } from 'react';
const axios = require('axios').default;

function FirstQuery() {
  const [image,setImage] = useState({});
  const fetchPlanet = async () => {
    const res= await axios.get('https://dog.ceo/api/breeds/image/random')
    setImage(res.data.message);
  }
  useEffect(()=>{
    fetchPlanet();
  },[]); 
  return (
    <div>first-query
      <div>
        <img src={image} alt="monster"/>
      </div>
    </div>
    
  )
}

export default FirstQuery;