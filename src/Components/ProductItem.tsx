import React, { FC, useState } from "react";
import { IProduct } from "../app/models/IProduct";
import Modal from "./Modal/Modal";

interface ProductItemPros {
  productItem: IProduct;
}
const ProductItem: FC<ProductItemPros> = ({ productItem }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div key={productItem.id} className="product">
        <div>
          <img src={productItem.imageUrl} alt="product" />
        </div>
        <label htmlFor="text"> Product Name: {productItem.name}</label>
        <p>Count: {productItem.count}</p>
        <p> Size is: </p>
        <div className="size">
          <div className="sizeItem">
            <p>width: {productItem.size.width} </p>
          </div>
          <div className="sizeItem">
            <p>height: {productItem.size.height}</p>
          </div>
          <div className="sizeItem">
            <p>Weight: {productItem.weight}</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => setActive(true)}>Edit</button>
      </div>
      <Modal setActive={setActive} active={active}>
        <form action="submit">
          <div>
            <label htmlFor="text">Change product name: </label>
            <input type="text" placeholder="name" />
          </div>
          <div>
            <label htmlFor="text">Change product count: </label>
            <input type="text" placeholder="count" />
          </div>
          <button>Change product description</button>
        </form>
      </Modal>
      {/* <div><button></button></div> */}
    </div>
  );
};

export default ProductItem;
