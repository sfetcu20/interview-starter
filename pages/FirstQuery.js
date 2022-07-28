import React from 'react'
import { useState,useEffect } from 'react';
const axios = require('axios').default;

function FirstQuery() {
  const [image,setImage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchPlanet = async () => {
    setIsLoading(true)
    const res= await axios.get('https://dog.ceo/api/breeds/image/random')
    setImage(res.data.message);
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchPlanet();
  },[]); 
  return (
    <div>first-query
      <div>
        <p>{isLoading && "is loading"}</p>
        <img src={image} alt="monster"/>
      </div>
    </div>
    
  )
}

export default FirstQuery;