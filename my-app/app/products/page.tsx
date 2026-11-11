
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

export default async function Products() {
  const data = await getProducts();

  return (
    <div>
      <h1>Product List</h1>

      {data.products.map((product: any) => (
        <p key={product.id}>
          {product.title} - ₹{product.price}
        </p>
      ))}
    </div>
  );
}
