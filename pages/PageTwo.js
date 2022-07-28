import React from 'react'
import {useQuery} from 'react-query'
const axios = require('axios').default;

function PageTwo() {
    const handleClick = ()=>{
        refetch();
    }
    const getDog=async ()=>{
        const res = await axios.get('https://dog.ceo/api/breeds/image/random');
        console.log(res)
        if (res.status===200) return res.data.message
        
    }
    const {data,isLoading,refetch} = useQuery("dogs",getDog, {refetchOnWindowFocus: false,
                        enabled: false});
    return (
    <div>PageTwo 
        <p>{isLoading && "is loading"}</p> 
        <img src={data}/> 
        <button onClick={handleClick} value="Get new picture">Get new picture</button>
    </div>
  )
}

export default PageTwo