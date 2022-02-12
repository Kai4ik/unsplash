import React, { useState } from "react";
import styled from "styled-components";
import ImageUploader from "./ImageUploader";
import FormButtons from "./FormButtons";

const Form = styled.div`
  height: 100vh;
  width: 25vw;
  background: white;
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 1.4rem 0;
  box-shadow: -4px 0px 8px -2px gray;
  transform: translateY(${(props) => props.transformYLevel});
  transition: all 0.4s linear;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    left: 0;
    width: 100vw;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.4rem;
  color: #efb6b2;
  text-align: center;
  margin-bottom: 2vh;
`;

const Field = styled.div`
  margin-top: 4vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FieldLabel = styled.label`
  font-size: 1.2rem;
  padding-left: 2rem;
  text-transform: capitalize;
`;

const FieldInput = styled.input`
  width: 90%;
  padding: 1rem;
  margin-left: 1.2rem;
  font-size: 1.2rem;
  outline: none;
  border: 2px solid #d5d5d5;
  border-radius: 12px;
  transition: border-color 0.3s linear;
  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
  &:focus {
    border-color: #efb6b2;
  }
`;

const FileName = styled.p`
  font-size: 1rem;
  padding: 0 2rem;
`;

const Error = styled(FileName)`
  color: #ff7272;
  margin-top: -1vh;
`;

const AddForm = ({ showForm, setShowForm }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    userName: "",
    photoLabel: "",
    file: null,
  });
  const [nameError, setNameError] = useState(false);
  const [labelError, setLabelError] = useState(false);

  const handleChange = (event) => {
    let newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  };

  return (
    <Form transformYLevel={showForm ? "0" : "-110%"}>
      <FormTitle> Upload an image </FormTitle>
      <Field>
        <FieldLabel> Your Name </FieldLabel>
        <FieldInput
          type="text"
          placeholder="your name"
          onChange={handleChange}
          value={data.userName}
          name="userName"
          required
          placeholderColor={nameError === false ? "#d5d5d5" : "red"}
        />
      </Field>
      <Field>
        <FieldLabel> Photo Label </FieldLabel>
        <FieldInput
          type="text"
          placeholder="photo label"
          onChange={handleChange}
          value={data.photoLabel}
          name="photoLabel"
          required
          placeholderColor={labelError === false ? "#d5d5d5" : "red"}
        />
      </Field>
      <Field>
        <ImageUploader data={data} setError={setError} setData={setData} />
      </Field>
      <Field>
        <FileName>
          {data.file === null
            ? "No file chosen"
            : error
            ? "Invalid file format: " + data.file.type
            : data.file.name}
        </FileName>
      </Field>
      {error && (
        <Field>
          <Error> Please upload different image file (jpg/png/jpeg) </Error>
        </Field>
      )}
      <FormButtons
        setShowForm={setShowForm}
        setError={setError}
        data={data}
        setData={setData}
        setNameError={setNameError}
        setLabelError={setLabelError}
      />
    </Form>
  );
};

export default AddForm;
