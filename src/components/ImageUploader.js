import React from "react";
import styled from "styled-components";

const FileUpload = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  background: #3db46d;
  cursor: pointer;
  width: 70%;
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 2px;
  color: white;
  margin: 1vh 0 0 1.6rem;
  transition: all 0.2s ease-in;
  &:hover {
    background: #d5d5d5;
    color: black;
  }
`;

const ImageUploader = ({ setData, setError, data }) => {
  const acceptableFileTypes = ["image/jpg", "image/png", "image/jpeg"];

  const handleImageUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const newData = { ...data };
      newData["file"] = uploadedFile;
      setData(newData);
      setError(
        uploadedFile && acceptableFileTypes.includes(uploadedFile.type)
          ? false
          : true
      );
    }
  };

  return (
    <>
      <FileUpload
        type="file"
        id="image"
        onChange={(e) => handleImageUpload(e)}
      />
      <FileLabel htmlFor="image">Upload an image</FileLabel>
    </>
  );
};

export default ImageUploader;
