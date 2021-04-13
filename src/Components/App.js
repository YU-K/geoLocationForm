import React, { useContext } from "react";
import EditForm from "./EditForm";
import SearchAddress from "./SearchAddress";
import SuccessMessage from "./SuccessMessage";
import StateContext from "../context";
import ShowResults from "./ShowResults";

const App = () => {
  const { processState, onSelect } = useContext(StateContext);

  switch (processState) {
    case "filling":
      return <SearchAddress onSelect={onSelect} />;
    case "finished":
      return <ShowResults />;
    case "editing":
      return <EditForm />;
    case "submitted":
      return <SuccessMessage />;
    default:
      throw new Error(`'${processState}' - unknown state`);
  }
};

export default App;
