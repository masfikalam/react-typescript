import React, { useState } from "react";

interface iProduct {
  title: string;
  price: number;
  seller: string;
}

interface iAdd {
  products: iProduct[];
  addProduct: (newProduct: iProduct) => void;
}

export default function AddProduct({ products, addProduct }: iAdd) {
  const empty = { title: "", price: 0, seller: "" };
  const [newProduct, setNewProduct] = useState<iProduct>(empty);

  // create new product
  const updateDetails = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // add new product to list
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct(empty);
  };

  return (
    <div>
      <form
        id="product_form"
        onSubmit={handleSubmit}
        className="d-flex flex-column"
      >
        <input
          required
          type="text"
          name="title"
          placeholder="Title"
          value={newProduct.title}
          onChange={updateDetails}
          className="form-control my-2"
        />
        <input
          required
          type="number"
          name="price"
          placeholder="Price"
          onChange={updateDetails}
          value={newProduct.price}
          className="form-control my-2"
        />
        <input
          required
          type="text"
          name="seller"
          placeholder="Seller"
          onChange={updateDetails}
          value={newProduct.seller}
          className="form-control my-2"
        />
        <input
          type="submit"
          value="Add +"
          className="btn btn-outline-success border-3 fw-bold w-25 mx-auto my-2"
        />
      </form>
    </div>
  );
}
