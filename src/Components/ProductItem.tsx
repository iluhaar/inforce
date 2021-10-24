import React, { FC, useState } from "react";
import { useAppDispatch } from "../app/hooks/hooks";
import { IProduct } from "../app/models/IProduct";
import { newProductData } from "../app/store/reducers/ActionCreator";
// import EditComp from "./EditComp";
import Modal from "./Modal/Modal";

interface ProductItemPros {
  productItem: IProduct;
}
const ProductItem: FC<ProductItemPros> = ({ productItem }) => {
  const [active, setActive] = useState(false);
  const [changedName, setChangedName] = useState("");
  const [changedCount, setChangedCount] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    let newData = [changedName, changedCount]
    localStorage.setItem("Name", changedName);
    localStorage.setItem("Count", changedCount);
    alert('Editing sent')
    // dispatch(newProductData(name, changedCount))
    setActive(false);
    setChangedName("");
    setChangedCount("");
  };

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
              <input type="text" placeholder="name" onChange={(e) => setChangedName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="text">Change product count: </label>
              <input type="text" placeholder="count" onChange={(e) => setChangedCount(e.target.value)} />
            </div>
            <div>
              <label htmlFor="text">Change product height: </label>
              <input type="text" placeholder="height" onChange={(e) => setChangedCount(e.target.value)} />
            </div>
            <div>
              <label htmlFor="text">Change product width: </label>
              <input type="text" placeholder="width" onChange={(e) => setChangedCount(e.target.value)} />
            </div>
            <div>
              <label htmlFor="text">Change product weight: </label>
              <input type="text" placeholder="weight" onChange={(e) => setChangedCount(e.target.value)} />
            </div>
            <button onClick={(e) => handleSubmit(e)}>
              Change product description
            </button>
        </form>
        {/* <EditComp /> */}
      </Modal>
    </div>
  );
};

export default ProductItem;
