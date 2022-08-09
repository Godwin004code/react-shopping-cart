

import {CartProvider} from "react-use-cart"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import { useState } from "react"
import {useCart} from "react-use-cart"

//import './index.css'

const App = () => {
  const {totalUniqueItems} = useCart()
  const [show, setShow] = useState(false)

  const handleShow = () => {
    document.documentElement.scrollTop = 0;
      document.body.classList.add("remove-scrollbar");
    setShow(true)
  }
  const handleHide = () => {
    document.documentElement.scrollTop = 0;
      document.body.classList.remove("remove-scrollbar");
    setShow(false)
  }
 
  return (
    <BrowserRouter>
    <CartProvider>
      <Nav handleShow={handleShow} />
   <Routes>
    <Route path="/" exact element={<Home show={show} setShow={setShow} handleHide={handleHide} />} />
   </Routes>
   </CartProvider>
   </BrowserRouter>
  )
}

export default App