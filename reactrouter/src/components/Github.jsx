import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
 function Github(){
    const data = useLoaderData()
    // const [data, setData] =useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Imdhruvkumar")
    //      .then(response => response.json())
    //      .then(data=>{
    //         console.log(data);
    //         setData(data)

            
    // })
    // },[])
    return(
        <div className="m-4 bg-gray-500 text-center text-whitep-4 
        text-3xl">Github followers: {data.followers}
        <img  src={data.avatar_url} alt="github picture"  className="width-300
         hight-300 m-4 mx-auto"/>
        </div>)
       
}
export default Github

export const githubInfoLoader = async( )=>{
   const response=await fetch("https://api.github.com/users/Imdhruvkumar")
    return response.json()
}