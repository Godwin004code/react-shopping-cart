
import React from 'react'
import Items from './Items'
import TotalItem from './TotalItem'


const Home = ({show, setShow, handleHide}) => {
  
  
  return (
    <div style={{marginTop: '5rem'}}>
        <Items />
        <TotalItem show={show} setShow={setShow} handleHide={handleHide} />
    </div>
  )
}

export default Home