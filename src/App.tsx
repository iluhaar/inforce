import React, { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks/hooks";
import { fetchProducts } from "./app/store/reducers/ActionCreator";
import Modal from "./Components/Modal/Modal";
import ProductList from "./Components/ProductList"
function App() {
  const [active, setActive] = useState(true)

  const dispatch = useAppDispatch();

  const { isLoading} = useAppSelector(
    (state) => state.productReducer
  );
    useEffect(() => {
      dispatch(fetchProducts())
    }, [])
  return <div className="App">
    <header />
    {isLoading && <h1>Data is loading</h1>}
      <ProductList  />   
      {/* <Modal setActive={setActive} active={active} />  */}
  </div>;
}

export default App;
