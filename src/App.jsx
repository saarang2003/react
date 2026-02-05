import ProductList from "./component/ProductList";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 80000, inStock: true },
  { id: 2, name: "Mouse", price: 800, inStock: false },
  { id: 3, name: "Keyboard", price: 1500, inStock: true },
];

function App() {
  if (!PRODUCTS.length) {
    return <div>No Product Data Found....</div>;
  }

  return (
    <>
      <ProductList items={PRODUCTS} />
    </>
  );
}

export default App;
