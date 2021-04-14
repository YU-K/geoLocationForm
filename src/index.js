import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import StateContext from "./context";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "./theme";

const customTheme = createMuiTheme(theme);

const Main = () => {
  const [process, updateProcess] = useState("filling");
  const [addressObject, setAddress] = useState({});
  const [userAddress, updateUserAddress] = useState({});

  return (
    <React.StrictMode>
      <MuiThemeProvider theme={customTheme}>
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
      </MuiThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
