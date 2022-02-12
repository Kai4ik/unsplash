import React from "react";
import styled from "styled-components";
import NoImage from "../images/noImage.jpg";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  transition: transform 0.2s linear;
  transform: translateY(${(props) => props.transformLevel});
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5vw;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2vh 2vw;
  }
`;

const ImageContainer = styled.div`
  width: 60%;
  height: 90%;
  background-image: url(${NoImage});
  background-position: center;
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 35%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 35px;
  }
`;

const ImageItself = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  width: 30%;
  height: 90%;
  background: #f9f9f9;
  padding: 2rem;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  @media only screen and (max-width: 768px) {
    height: 30%;
    width: 90%;
    padding: 1.4rem;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 35px;
  }
`;

const DetailsField = styled.div`
  display: flex;
  column-gap: 15px;
  row-gap: 5px;
  flex-wrap: wrap;
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #222831;
  @media only screen and (max-width: 768px) {
    margin-bottom: 14px;
  }
`;

const FieldTitle = styled.p`
  color: #efb6b2;
`;

const ModalWindow = ({ data, setImageToShow }) => {
  return (
    <ModalContainer
      transformLevel={data === null ? "-100%" : "0%"}
      onClick={() => setImageToShow(null)}
    >
      {data && (
        <>
          <ImageContainer>
            <ImageItself src={data.imageURL} alt={data.label} />
          </ImageContainer>
          <Details>
            <DetailsField>
              <FieldTitle>Photo Name:</FieldTitle>{" "}
              {data ? data.label : "No data"}
            </DetailsField>
            <DetailsField>
              <FieldTitle>Uploaded by:</FieldTitle>
              {data ? data.userName : "No data"}
            </DetailsField>
            <DetailsField>
              <FieldTitle> Uploaded at:</FieldTitle>
              {new Date(data.createdAt.seconds * 1000).toLocaleString(
                "default",
                {
                  month: "long",
                }
              )}
              &nbsp;&nbsp;
              {new Date(data.createdAt.seconds * 1000).getDate()}
              ,&nbsp;&nbsp;
              {new Date(data.createdAt.seconds * 1000).getFullYear()}
            </DetailsField>
          </Details>
        </>
      )}
    </ModalContainer>
  );
};

export default ModalWindow;
