
import React from 'react'
import './Total.css'
import { useCart } from 'react-use-cart'

const TotalItem = ({show, setShow}) => {
  const {items, totalItems, totalUniqueItems, cartTotal, removeItem,updateItemQuantity, emptyCart, isEmpty} = useCart()

  if (totalUniqueItems === 0) setShow(false)
  return (
    <div>
      {show ? <div className='receipt-container'>
        <div className='receipt'>
          <div>
            <h2>Total Price: &#8358; {cartTotal}</h2>
            <h2>Quantity: {totalUniqueItems}</h2>
           
              {items.map((item, index) => {
                return (
                  
               <div>
                <h2>{item.title}</h2>
                <h2>{item.price}</h2>
                <div>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1 )}>+</button>
                  <h2>{item.quantity}</h2>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1 )}>-</button>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove Item</button>
                </div>
                )
              })}
              
            </div>
        </div>
      </div> : ''}
    </div>
  )
}

export default TotalItem