
import React from 'react'
import './Total.css'
import { useCart } from 'react-use-cart'

const TotalItem = ({show, setShow, handleHide}) => {
  const {items, totalItems, totalUniqueItems, cartTotal, removeItem,updateItemQuantity, emptyCart, isEmpty} = useCart()

  return (
    <div>
      {<div className={show ? 'receipt-container active' : 'receipt-container'}>
        <div className='receipt'>
          <div onClick={handleHide} className='cancel'>
           X
          </div>
          <div>
            <h2 className='total'>Total Price: &#8358; {cartTotal}</h2>
            <h2>Quantity: {totalUniqueItems}</h2>
           
              {isEmpty === 'true' ? '' : items.map((item, index) => {
                return (
                  
               <div key={item.id} className='item'>
                <div className='item-tab'>
                  <div className='item-tab-img'>
                    <img src={"https://protected-journey-89988.herokuapp.com" + item.img} alt={item.title} />
                  </div>
                  <div className='item-title'>
                  <h2>{item.title}</h2>
                <h2>&#8358; {item.price}</h2>
                  </div>
                </div>
                <div className='option'>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1 )}>+</button>
                  <h2>{item.quantity}</h2>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1 )}>-</button>
                </div>
                <button className='remove' onClick={() => removeItem(item.id)}>Remove Item</button>
                </div>
                )
              })}
              
            </div>
        </div>
      </div>}
    </div>
  )
}

export default TotalItem