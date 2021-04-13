import React, { useContext } from "react";
import EditForm from "./EditForm";
import SearchAddress from "./SearchAddress";
import SuccessMessage from "./SuccessMessage";
import StateContext from "../context";
import ShowResults from "./ShowResults";

const App = () => {
  const { process } = useContext(StateContext);

  switch (process) {
    case "filling":
      return <SearchAddress />;
    case "selected":
      return (
        <>
          <SearchAddress />
          <ShowResults />
        </>
      );
    case "editing":
      return <EditForm />;
    case "submitted":
      return <SuccessMessage />;
    default:
      throw new Error(`'${process}' - unknown state`);
  }
};

export default App;
