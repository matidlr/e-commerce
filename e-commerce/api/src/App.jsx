import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { Home, Products, SingleProduct, About, Cart, Error, Checkout, PrivateRoute, AuthWrapper } from './pages'

function App() {
  return (
    <AuthWrapper>
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
        </Routes>
        <Footer />
    </BrowserRouter>
    </AuthWrapper>
  ) 
}

export default App
