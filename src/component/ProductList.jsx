import ProductCard from "./ProductCard";

function ProductList({ items, loading }) {
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (!items.length) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {items.length > 0 &&
        items.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            status={item.inStock}
          />
        ))}
    </div>
  );
}

export default ProductList;
