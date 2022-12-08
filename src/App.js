import React from 'react';
import { BrowserRouter, Route, Routes }from 'react-router-dom'
import { Cart, Checkout, Home, Shop, View } from './pages'
import { Footer, Header } from './components'

const App = () => {
    return(
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}

export default App;
