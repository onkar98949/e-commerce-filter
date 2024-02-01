import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countDec, countIncre, remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total)

  const handleInc = (id) => {
    dispatch(countIncre(id));
  }
  const handleDec = (id) => { 
    dispatch(countDec(id));
  }

  const handleRemove = (product) => {
    dispatch(remove(product));
  }

  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <div className='flex justify-around'>
        <h2 className='font-bold my-3 text-2xl'>CART</h2>
        <span className='font-bold my-3 font-serif text-2xl'>Grand Total: ${Math.round(total)}</span>
      </div>
      <div className='cartWrapper'>
        {
          products.map(product => (
            <div key={product.id} className='cartCard mx-auto'>
              <div className='cartdiv1'>
                 <img src={product.thumbnail} alt='productimage' />
                 <p>{product.title}</p>
              </div>
              <div className='cartdiv2'>
              <div className='flex'>
                <button onClick={()=>{handleDec(product.id)}} className='btn mx-1 w-8'>-</button>
                <span className='m-2 text-center'>{product.quantity}</span>
                <button onClick={()=>{handleInc(product.id)}} className='btn mx-1 w-8'>+</button>
              </div>
              <p>${Math.round(product.price* product.quantity)}</p>
              <button className='btn' onClick={() => { handleRemove(product) }}>Remove</button>
              </div>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart