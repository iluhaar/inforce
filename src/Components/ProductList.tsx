import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { fetchProducts } from "../app/store/reducers/ActionCreator";
import ProductItem from "./ProductItem";

const ProductList = () => {
  
    const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.productReducer);
  console.log(product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  return (
    <div className="products-wrapper">
      {product.map((p) => (
        <div key={p.id} className="product">
          <ProductItem productItem={p}/>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
