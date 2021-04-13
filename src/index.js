import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import StateContext from "./context";

const Main = () => {
  const [process, updateProcess] = useState("filling");
  const [addressObject, setAddress] = useState({});
  const [userAddress, updateUserAddress] = useState({});

  return (
    <React.StrictMode>
      <StateContext.Provider
        value={{
          process,
          updateProcess,
          userAddress,
          addressObject,
          updateUserAddress,
          setAddress,
        }}
      >
        <App />
      </StateContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
