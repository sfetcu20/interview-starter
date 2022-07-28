import React from 'react'
import { useState } from 'react';
import {useQuery} from 'react-query'
const axios = require('axios').default;
function PageTwo() {
    const [image,setImage]=useState({})
    const getDog=async ()=>{
        const {data, status} = await axios.get('https://dog.ceo/api/breeds/image/random');
        setImage(data.message)
    }
    const {data,status} = useQuery("dogs",getDog);
    return (
    <div>PageTwo  
        <img src={image}/>
    </div>
  )
}

export default PageTwo