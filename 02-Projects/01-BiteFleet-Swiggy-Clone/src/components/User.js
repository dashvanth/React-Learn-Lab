import { useState } from "react";

const User = ({ name, Location, contact }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div id="user-card">
        <h1>Count = {count}</h1>
        <button onClick={increaseCount}>increaseCount</button>
        <h2>Name : {name}</h2>
        <h3>Location : {Location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    </>
  );
};
export default User;
