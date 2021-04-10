import React, { useContext } from "react";
import EditIcon from "@material-ui/icons/Edit";
import EditForm from "./EditForm";
import SearchAddress from "./SearchAddress";
import SuccessMessage from "./SuccessMessage";
import StateContext from "../context";

const App = () => {
  const {
    processState,
    updateProcessState,
    userAddress,
    onSelect,
  } = useContext(StateContext);

  const renderRow = (key) => {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{userAddress[key].toString()}</td>
      </tr>
    );
  };

  const renderResult = () => {
    const keys = Object.keys(userAddress).sort();
    return (
      <>
        <div>
          <p>Вы выбрали...</p>
          <EditIcon onClick={() => updateProcessState("editing")} />
          <table key="fieldsValues" className="table">
            <tbody>{keys.map(renderRow)}</tbody>
          </table>
        </div>
      </>
    );
  };

  switch (processState) {
    case "filling":
      return <SearchAddress onSelect={onSelect} />;
    case "finished":
      return renderResult();
    case "editing":
      return <EditForm />;
    case "submitted":
      return <SuccessMessage />;
    default:
      throw new Error(`'${processState}' - unknown state`);
  }
};

export default App;
