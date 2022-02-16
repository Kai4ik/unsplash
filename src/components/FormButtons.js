import React from "react";
import styled from "styled-components";
import { storage, firestore } from "../firebase/firebase-configuration";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const BtnFields = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;

const SubmitBtn = styled.div`
  background: #efb6b2;
  text-align: center;
  padding: 1rem;
  width: 50%;
  border-right: 3px solid black;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f9f9f9;
    background: #3db46d;
  }
`;

const CloseBtn = styled(SubmitBtn)`
  border: none;
  &:hover {
    background: #ff5959;
  }
`;

const FormButtons = (props) => {
  const { setShowForm, setError, data, setData, setLabelError, setNameError } =
    props;
  const closeForm = () => {
    setError(false);
    setData({ userName: "", photoLabel: "", file: null });
    setShowForm(false);
    setLabelError(false);
    setNameError(false);
  };

  const handleSubmit = () => {
    if (
      data.userName.length > 3 &&
      data.photoLabel.length > 0 &&
      data.file !== null
    ) {
      const storageRef = ref(storage, data.file ? data.file.name : "name");
      uploadBytes(storageRef, data.file).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then(async (downloadURL) => {
            try {
              const docRef = await addDoc(collection(firestore, "images"), {
                imageURL: downloadURL,
                userName: data.userName,
                label: data.photoLabel,
                createdAt: Timestamp.fromDate(new Date()),
              });
              console.log(docRef);
              setShowForm(false);
              setData({ userName: "", photoLabel: "", file: null });
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          })
          .catch((error) => {
            switch (error.code) {
              case "storage/object-not-found":
                console.log("Requested file does not exist");
                break;
              case "storage/unauthorized":
                console.log("User does not have authorization");
                break;
              default:
                console.log("Unknown error occurred");
                break;
            }
          });
      });
    }
    if (data.userName.length < 3) {
      setNameError(true);
      setData({ userName: "", photoLabel: "", file: null });
    }
    if (data.photoLabel.length === 0) {
      setLabelError(true);
      setData({ userName: "", photoLabel: "", file: null });
    }
  };

  return (
    <BtnFields>
      <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
      <CloseBtn onClick={closeForm}>Close</CloseBtn>
    </BtnFields>
  );
};

export default FormButtons;
