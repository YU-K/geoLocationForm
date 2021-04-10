import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import StateContext from "./context";
import _ from "lodash";

const Main = () => {
  const [processState, updateProcessState] = useState("filling");
  const [addressObject, setAddress] = useState({});
  const [userAddress, updateUserAddress] = useState({
    country: "",
    city: "",
    postcode: "",
    street: "",
    housenumber: "",
  });

  const onSelect = (value) => {
    if (!value) {
      return;
    }
    const addressObj = value.properties;

    setAddress({ ...addressObj });
    updateProcessState("finished");
  };

  const getUserAddressObject = (obj1, obj2) => {
    const keys = Object.keys(obj1);
    keys.map((key) => {
      if (!_.has(obj2, key)) {
        return;
      }
      obj2[key] = obj1[key];
    });
    return;
  };

  const address = getUserAddressObject(addressObject, userAddress);

  return (
    <React.StrictMode>
      <StateContext.Provider
        value={{
          processState,
          updateProcessState,
          userAddress,
          addressObject,
          updateUserAddress,
          onSelect,
        }}
      >
        <App />
      </StateContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
