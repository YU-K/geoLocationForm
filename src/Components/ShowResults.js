import { useContext } from "react";
import StateContext from "../context";
import SettingsIcon from "@material-ui/icons/Settings";
import { Typography } from "@material-ui/core";
import { Section } from "../styles";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const ShowResults = () => {
  const { updateProcess, userAddress } = useContext(StateContext);

  const useStyles = makeStyles((theme) => ({
    mgBottom20: {
      "margin-bottom": "20px",
      "margin-top": "10px",
    },
    clickableIcon: {
      color: "rgb(163, 168, 173)",
      "&:hover": {
        cursor: "pointer",
        color: "#000",
      },
      position: "relative",
      left: "20px",
      top: "6px",
    },
  }));

  const classes = useStyles();

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
          <Typography display="inline">Вы выбрали :</Typography>
          <SettingsIcon
            className={classes.clickableIcon}
            onClick={() => updateProcess("editing")}
          />
          <Divider className={classes.mgBottom20} />
          <table key="fieldsValues" className="table">
            <tbody>{keys.map(renderRow)}</tbody>
          </table>
        </div>
      </>
    );
  };

  return <Section>{renderResult()}</Section>;
};

export default ShowResults;
