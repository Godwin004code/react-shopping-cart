
import React from 'react'
import Items from './Items'
import TotalItem from './TotalItem'

const Home = ({show, setShow, handleHide}) => {
  return (
    <div>
        <Items />
        <TotalItem show={show} setShow={setShow} handleHide={handleHide} />
    </div>
  )
}

export default Home