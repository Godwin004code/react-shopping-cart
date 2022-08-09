

import React from 'react'
import { data } from './data'
import { useCart } from 'react-use-cart'
import Swal from "sweetalert2"



const Items = () => {
    const {addItem} = useCart()
    const added = (item) => {
        Swal.fire({
            text: 'Added to cart'
        })
        addItem(item)
    }
  return (
    <section className='cart'>
        {data.map((item) => (
            <div className='cart-container' key={item.id}>
                <div>
                    <img src={item.img} alt={item.title} />
                </div>
                <div>
                    <h2>{item.title}</h2>
                    <h2>&#8358; {item.price}</h2>
                </div>
                <button onClick={() => added(item)}>Add to cart</button>
            </div>
        ))}
    </section>
  )
}

export default Items