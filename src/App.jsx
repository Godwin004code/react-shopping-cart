

import {CartProvider} from "react-use-cart"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import { useState } from "react"
//import './index.css'

const App = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(true)
  }
 
  return (
    <BrowserRouter>
    <CartProvider>
      <Nav handleShow={handleShow} />
   <Routes>
    <Route path="/" exact element={<Home show={show} setShow={setShow} />} />
   </Routes>
   </CartProvider>
   </BrowserRouter>
  )
}

export default App