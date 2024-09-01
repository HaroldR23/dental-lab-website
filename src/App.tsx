import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom'

import ProductProvider from './contexts/ProductContext/ProductProvider'
import AppointmentProvider from './contexts/AppointmentContext/AppointmentProvider'
import Home from './pages/Home/Home';
import Products from './pages/Poducts/Products';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <AppointmentProvider>
            <Home />
          </AppointmentProvider>
        } />
        <Route path="/products" element={
          <ProductProvider>
            <Products />
          </ProductProvider>
        } />
      </Routes>
    </Router>
  )
}

export default App;
