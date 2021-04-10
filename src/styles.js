import styled from "styled-components";
import { Field } from "formik";

export const Section = styled.section`
  font-family: system-ui;
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`;

export const Input = styled(Field)`
  border: 2px solid #edf2f7;
  border-radius: 4px;
  padding: 0.75rem 0.75rem;
  font-size: 1rem;
  background-color: #f7fafc;
  color: #2d3748;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: rgb(74, 85, 104);
  border: rgb(74, 85, 104);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const StyledErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  white-space: pre-line;
`;
