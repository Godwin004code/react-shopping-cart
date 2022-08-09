

import React from 'react'
import { data } from './data'
import { useCart } from 'react-use-cart'

const Items = () => {
    const {addItem} = useCart()
  return (
    <>
        {data.map((item) => (
            <div>
                <div>
                </div>
                <div>
                    <h2>{item.title}</h2>
                    <h2>{item.price}</h2>
                </div>
                <button onClick={() => addItem(item)}>Add to cart</button>
            </div>
        ))}
    </>
  )
}

export default Items