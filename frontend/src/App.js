import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/">La_Vendor</Link>
        </header>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>

          {/* <h1>Feautured Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`product/${product.slug}`}>
                  <img src={product.image} alt={product.name}></img>
                </a>
                <div className="product-info">
                  <a href={`product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>
            ))}
          </div> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
