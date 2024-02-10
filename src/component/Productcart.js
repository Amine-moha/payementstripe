import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/Action';


function Productcart({e}) {
    const [quantity,setquantity]=useState(0)
    const dispatch=useDispatch()
    const add=()=>{
        setquantity(quantity+1)
    }
    const decrement=()=>{
        if (quantity>0){
            setquantity(quantity-1)
        }
       
    }
  return (
    <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={e.image} />
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>
              {e.description}
            </Card.Text>
            <Card.Text>
              {e.price}$
            </Card.Text>
            <Button variant="primary" onClick={add}>+</Button>
            <span>{quantity}</span>
            <Button variant="primary" onClick={decrement}>-</Button>
            <Button variant="primary" onClick={()=>dispatch(addtocart({product:e,quantity:quantity}))}>ADD TO cart </Button>
          </Card.Body>
        </Card>  
    </div>
  )
}

export default Productcart