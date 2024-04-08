import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { Home, Products, SingleProduct, About, Cart, Error, Checkout, Private } from './pages'
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='products' element={<Products/>}/>
           <Route path='singleProduct/:id' element={<SingleProduct/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='cart' element={<Cart/>}/>
           <Route path='Error' element={<Error/>}/>
           <Route 
                path='/checkout' 
                element={<PrivateRoute>
                       <Checkout/>
                  </PrivateRoute>
                }/>
          
           <Route path='/private' element={<Private/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  ) 
}

export default App
