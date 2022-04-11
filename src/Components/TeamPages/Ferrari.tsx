import React, {useContext} from "react";
import { DriverContext } from "../DriverContext";

const Ferrari = () => {
  const context = useContext(DriverContext);
  const {message, setMessage} = context


  return (
    <>
      <div>Welcome to the</div>
      <h1>Ferrari Page</h1>
      <h2>{message}</h2>
    </>
  );
};

export default Ferrari;
