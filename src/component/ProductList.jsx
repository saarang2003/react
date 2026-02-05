import ProductCard from "./ProductCard";

function ProductList({ items }) {
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
