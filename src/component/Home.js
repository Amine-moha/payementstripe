import React, { useEffect, useState } from 'react'
import axios from "axios"
import Productcart from './Productcart';
function Home() {
    const [products,setproducts]=useState([])
    
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>setproducts(res.data))
    },[])
  return (
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
        {products.map(e=>
         <Productcart e={e}/>
            )}
    </div>
  )
}

export default Home