import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

    const pramas=useParams();
    // for get id
    console.log(pramas.id);
    
    useEffect(()=>{
        fetch("https://api.mydummyapi.com/comments/1")
  .then(response => response.json())
  .then(json => console.log(json));
    //    console.log("hhhhhhhhhhhhh");
        
    },[])
  return (
    <div>
      product.{pramas.id}
    </div>
  )
}

export default Product
