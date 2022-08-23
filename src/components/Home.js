
import React, { useState, useRef } from 'react'
import Items from './Items'
import TotalItem from './TotalItem'
import { data } from './data'
import {useCart} from "react-use-cart"

const Home = ({show, setShow, handleHide}) => {
  
  const [filtered, setFiltered] = useState(data)
  const allRef = useRef()
  const menRef = useRef()
  const womenRef = useRef()

  const changed = (e) => {
    const val = e.target.value
    //console.log(val);
    if(allRef.current.checked === true) {
      setFiltered(data)
      console.log(filtered);
    }
     else if(womenRef.current.checked === true) {
      setFiltered(filtered.filter((item) => item.category === 'women'))
      console.log(filtered);
    }

    if(womenRef.current.checked === false || womenRef.current.checked === false) {
      setFiltered(data)
    } 
   
  }
  return (
    <div style={{marginTop: '5rem'}}>
        <Items filtered={filtered} />
        <TotalItem show={show} setShow={setShow} handleHide={handleHide} />
    </div>
  )
}

export default Home