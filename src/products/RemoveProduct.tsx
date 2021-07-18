interface iProduct {
  title: string;
  price: number;
  seller: string;
}

interface iAdd {
  products: iProduct[];
  addProduct: any;
}

export default function AddProduct({ products, addProduct }: iAdd) {
  const removeItem = (title: string): void => {
    const removed = products.filter((product) => product.title !== title);
    addProduct(removed);
  };

  return (
    <>
      {products.length === 0 && <h5>No products to remove!</h5>}
      <div className="d-flex flex-column">
        {products.map((product, i) => (
          <div
            key={i}
            className="d-flex justify-content-between align-items-center border rounded px-4 py-3 my-2"
          >
            <div className="details">
              <h5>{product.title}</h5>
              <p className="text-warning mb-0">BDT {product.price}/=</p>
              <small className="text-light">By: {product.seller}</small>
            </div>
            <div className="delete">
              <button
                onClick={() => removeItem(product.title)}
                className="btn btn-outline-danger border-3 fw-bold fs-4 py-0"
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
