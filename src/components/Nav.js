
import { Badge } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import {useCart} from "react-use-cart"

const Nav = ({handleShow}) => {
    const {totalItems} = useCart()
  return (
    <header className='hidden'>
        <h2>Tioya Jumia</h2>
        <nav>
            <ul>
               
                <li onClick={handleShow}>
                    <Badge badgeContent={totalItems} color='secondary'>
                        <FaShoppingCart />
                    </Badge>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav