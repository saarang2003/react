import { useEffect, useState } from "react";
import ProductList from "./component/ProductList";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 80000, inStock: true },
  { id: 2, name: "Mouse", price: 800, inStock: false },
  { id: 3, name: "Keyboard", price: 1500, inStock: true },
];

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading (SPA behavior)
  useEffect(() => {
    setTimeout(() => {
      setProducts(PRODUCTS);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <ProductList items={products} loading={loading} />
    </>
  );
}

export default App;
