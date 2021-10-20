import React, { FC, useState } from "react";
import { IProduct } from "../app/models/IProduct";
import Modal from "./Modal/Modal";

interface ProductItemPros {
  productItem: IProduct;
}
const ProductItem: FC<ProductItemPros> = ({ productItem }) => {
    const [active, setActive] = useState(false);
    const [changedName, setChangedName] = useState('')
    const [changedCount, setChangedCount] = useState('')

    const handleSubmit = () => {
        // e.preventDefault();
        console.log('Submited')
    }


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
            <input type="text" placeholder="name" onChange={(e) => setChangedName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="text">Change product count: </label>
            <input type="text" placeholder="count" onChange={(e) => setChangedCount(e.target.value)}/>
          </div>
          <button onClick={() => {}}>Change product description</button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductItem;
