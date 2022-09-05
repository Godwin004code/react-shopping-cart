

import React, {useState, useEffect} from 'react'

import { useCart } from 'react-use-cart'
import Swal from "sweetalert2"
import Skeleton from './Skeleton'

const Items = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {addItem} = useCart()
    const added = (item) => {
        Swal.fire({
            text: 'Added to cart'
        })
        addItem(item)
    }

    const url = 'https://protected-journey-89988.herokuapp.com/api/shop'

    useEffect(() => {
        setIsLoading(true)
        fetch(url, {
            method: 'GET'
        }).then((response) => response.json())
        .then((result) => {
           // console.log(result)
           
            setItems(result)
            setIsLoading(false)
        }).catch((e) => {
            alert(e)
            setIsLoading(false)
        })
    }, [items])
  return (
    <section className='cart'>
        {isLoading ? Array(10).fill(<Skeleton />) : items.map((item) => {
            return (
                <div className='cart-container' key={item.id}>
                    <div>
                        <img src={"https://protected-journey-89988.herokuapp.com" + item.img} alt={item.title} />
                    </div>
                    <div>
                        <h2>{item.title}</h2>
                        <h2 className='price-item'>Price: &#8358;{item.price}</h2>
                    </div>
                    <button onClick={() => added(item)}>Add to cart</button>
                </div>
            )
        })}
    </section>
  )
}

export default Items