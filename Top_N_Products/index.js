import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

const API_BASE_URL = "http://20.244.56.144/test";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AZO',
    category: 'Laptop',
    minPrice: 1,
    maxPrice: 10000,
    topN: 10,
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/companies/${filters.company}/categories/${filters.category}/products/top-${filters.topN}?minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}`);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="App">
      <div className="filter">
        <select name="company" value={filters.company} onChange={handleInputChange}>
          <option value="ELP">ELP</option>
          <option value="S">S</option>
          <option value="VN">VN</option>
          <option value="AZO">AZO</option>
        </select>
        <select name="category" value={filters.category} onChange={handleInputChange}>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="TV">TV</option>
          <option value="Laptop">Laptop</option>
        </select>
        <input type="number" name="minPrice" value={filters.minPrice} onChange={handleInputChange} placeholder="Min Price" />
        <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleInputChange} placeholder "Max Price" />
        <input type="number" name="topN" value={filters.topN} onChange={handleInputChange} placeholder="Top N" />
      </div>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl || 'placeholder.jpg'} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));

// CSS Styles
const css = `
.App {
  text-align: center;
}

.filter {
  margin: 20px;
}

.filter select,
.filter input {
  margin-right: 10px;
}

.products-list {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  width: 200px;
}
`;

const style = document.createElement('style');
style.innerHTML = css;
document.head.appendChild(style);
