import { useContext } from "react";
import { Typography } from "@material-ui/core";
import { Section } from "../styles";
import StateContext from "../context";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const SuccessMessage = () => {
  const { userAddress } = useContext(StateContext);

  const useStyles = makeStyles((theme) => ({
    mgBottom20: {
      "margin-bottom": "20px",
      "margin-top": "10px",
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

  const renderAddress = () => {
    const keys = Object.keys(userAddress).sort();
    return (
      <>
        <div>
          <table key="fieldsValues" className="table">
            <tbody>{keys.map(renderRow)}</tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <Section maxWidth="sm">
      <Typography>Вы выбрали :</Typography>
      <Divider className={classes.mgBottom20} />
      {renderAddress()}
    </Section>
  );
};

export default SuccessMessage;
