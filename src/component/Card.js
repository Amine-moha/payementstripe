import React from 'react'
import "./Card.css"
import { useDispatch, useSelector } from 'react-redux'
import { remouve } from '../Redux/Action'
import axios from 'axios'


function Cart() {
    const cart=useSelector(state=>state)
    const dispatch=useDispatch()
    const hendelchekout=async()=>{
    await axios.post("http://localhost:9000/payment",{cart}).then(res=>{
    if(res.data.url){
        window.location.href=res.data.url
        }
    }
      )}
    console.log(cart)
  return (
    <div>
        <>
 
  <div className="container">
    <section id="cart">
      {cart.map(e=>
      <article className="product">
        <header>
          <a className="remove"onClick={()=>dispatch(remouve(e.product.id))}>
            <img
              src={e.product.image}
              alt=""
            />
            <h3>Remove product</h3>
          </a>
        </header>
        <div className="content">
          <h1>{e.product.title}</h1>
          {e.product.description}
         
          
        </div>
        <footer className="content">
       
          <span className="qt">{e.quantity}</span>
          
          <h2 className="full-price">{e.product.price*e.quantity}</h2>
          <h2 className="price">{e.product.price}</h2>
        </footer>
      </article>
      )}
    </section>
  </div>
  <footer id="site-footer">
    <div className="container clearfix">
      <div className="left">
        <h2 className="subtotal">
          Subtotal: <span>163.96</span>€
        </h2>
        <h3 className="tax">
          Taxes (5%): <span>8.2</span>€
        </h3>
        <h3 className="shipping">
          Shipping: <span>5.00</span>€
        </h3>
      </div>
      <div className="right">
        <h1 className="total">
          Total: <span>{cart.reduce((acc,element)=>acc+element.product.price*element.quantity,0)}</span>€
        </h1>
        <a className="btn" onClick={hendelchekout}>Checkout</a>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default Cart