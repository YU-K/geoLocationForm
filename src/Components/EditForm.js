import { useContext } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import StateContext from "../context";
import { Label, Input, Button, StyledErrorMessage, Section } from "../styles";

const EditForm = () => {
  const { updateProcess, userAddress, updateUserAddress } = useContext(
    StateContext
  );
  const { state, country, city, postcode, street, housenumber } = userAddress;

  return (
    <Section>
      <Formik
        initialValues={{
          state: state,
          country: country,
          city: city,
          postcode: postcode,
          street: street,
          housenumber: housenumber,
        }}
        validationSchema={Yup.object({
          state: Yup.string()
            .min(2, "Must be 2 characters or more")
            .required("Required"),
          country: Yup.string()
            .min(2, "Must be 2 characters or more")
            .required("Required"),
          city: Yup.string()
            .min(2, "Must be 2 characters or more")
            .required("Required"),
          postcode: Yup.number()
            .positive("The postcode must be positive")
            .min(6, "Must be 6 characters or more")
            .required("Required"),
          street: Yup.string().required("Required"),
          housenumber: Yup.number()
            .positive("The housenumber must be positive")
            .required("Required"),
        })}
        onSubmit={(values) => {
          updateUserAddress({ ...values });
          updateProcess("submitted");
        }}
      >
        <Form>
          <Label htmlFor="state">
            State
            <Input name="state" type="text" />
          </Label>
          <ErrorMessage name="state">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          <Label htmlFor="country">
            Country
            <Input name="country" type="text" />
          </Label>
          <ErrorMessage name="country">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <Label htmlFor="city">
            City
            <Input name="city" type="text" />
          </Label>
          <ErrorMessage name="city">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <Label htmlFor="postcode">Postcode</Label>
          <Input name="postcode" type="number" />
          <ErrorMessage name="postcode">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <Label htmlFor="street">Street</Label>
          <Input name="street" type="text" />
          <ErrorMessage name="street">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <Label htmlFor="housenumber">Housenumber</Label>
          <Input name="housenumber" type="number" />
          <ErrorMessage name="housenumber">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <Button type="submit">Next</Button>
        </Form>
      </Formik>
    </Section>
  );
};

export default EditForm;
