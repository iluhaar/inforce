import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks/hooks";
import { fetchProducts } from "./app/store/reducers/ActionCreator";
import Loader from "./Components/Loader/Loader";
import ProductList from "./Components/ProductList";
function App() {
  /** 
   * * I stucked with TS, cuz i do not have much experience with it, that was mistake:( 
   * * and didn't have enough time to implement the main functionality
   * * I only made a data fetching and displaying 
   * 
   * I'll create a brach and keep doing task for my self
   * 
   * * Thank you for your time
   * **/


  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <header />
      {isLoading && <Loader />}
      <ProductList />
    </div>
  );
}

export default App;
