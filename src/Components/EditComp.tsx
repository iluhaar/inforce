import React, { FC, useState } from "react";
interface EditCompProps {
  setActive: boolean;
}
const EditComp: FC<EditCompProps> = ({ setActive }) => {
  const [changedName, setChangedName] = useState("");
  const [changedCount, setChangedCount] = useState("");

  console.log("changedName", changedName);
  console.log("changedCount", changedCount);

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    localStorage.setItem("Name", changedName);
    localStorage.setItem("Count", changedCount);
  };

  return (
    <form action="submit">
      <div>
        <label htmlFor="text">Change product name: </label>
        <input type="text" placeholder="name" onChange={(e) => setChangedName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="text">Change product count: </label>
        <input type="text" placeholder="count" onChange={(e) => setChangedCount(e.target.value)} />
      </div>
      <button onClick={(e) => {handleSubmit(e)}}>Change product description</button>
    </form>
  );
};

export default EditComp;
