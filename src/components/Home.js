
import React from 'react'
import Items from './Items'
import TotalItem from './TotalItem'

const Home = ({show, setShow}) => {
  return (
    <div>
        <Items />
        <TotalItem show={show} setShow={setShow} />
    </div>
  )
}

export default Home