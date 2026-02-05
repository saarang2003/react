function ProductCard({ name, price, status }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        width: "200px",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0" }}>{name}</h3>
      <p style={{ margin: "0 0 5px 0" }}>Price: ₹{price}</p>
      <p
        style={{
          margin: 0,
          color: status ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {status ? "Available" : "Out Of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
