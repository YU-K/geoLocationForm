import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      address: "",
    },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="address"
          name="address"
          label="Введите адрес"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address}
        />
        <Button color="primary" variant="contained">
          Далее
        </Button>
      </form>
    </div>
  );
};

export default Form;
