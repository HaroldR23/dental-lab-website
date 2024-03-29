import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Products from './components/pages/Poducts/Products'
import ProductProvider from './contexts/ProductContext/ProductProvider'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/products" element={
            <ProductProvider>
              <Products />
            </ProductProvider>
          } />
      </Routes>
    </Router>
  )
}

export default App
