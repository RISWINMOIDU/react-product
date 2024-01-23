import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { phoneData } from './ProductData';

const Product = () => {
  const [items,setitems]=useState(phoneData)
  const decQty = (id)=>{
    const newItem = items.map((items)=>
    items.id === id && items.Qty >0 ?{...items, Qty:items.Qty - 1}:items
  );
  setitems(newItem)
  };

  const incQty = (id)=>{
    const newItem = items.map((items)=>
    items.id === id ?{...items, Qty:items.Qty + 1}:items
  );
  setitems(newItem)
  }
 


  return (
    <div>
      {items.map((items)=>(
        <div className='d-inline-flex' key={items.id}>
        

        <Card className='shadow p-3 mb-2 bg-body-teritiary rounded' style={{ width: '18rem' }}>
      <Card.Img 
      style={{height:'15rem'}}
      className='p2'  variant="top" src={require(`./Assets/${items.image}.png`)} />
      <Card.Body>
        <Card.Title className='text-info'>{items.model}</Card.Title>
        <Card.Text>
         ocean blue
        </Card.Text>
        <h3>Price:48000</h3>
        <p>Qty:{items.Qty} 
        <Button onClick={()=>decQty(items.id)} className='m-1'>-</Button>
        <Button onClick={()=>incQty(items.id)} className='m-1'>+</Button>  

        </p>
        <Button variant="dark">BUY NOW</Button>
      </Card.Body>
    </Card>
    </div>
 ))}
    </div>
    
  )
}

export default Product