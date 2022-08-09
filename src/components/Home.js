
import React from 'react'
import Items from './Items'
import TotalItem from './TotalItem'
import {useCart} from "react-use-cart"

const Home = ({show, setShow, handleHide}) => {
  const {isEmpty} = useCart()
  return (
    <div>
        <Items />
        <TotalItem show={show} setShow={setShow} handleHide={handleHide} />
    </div>
  )
}

export default Home