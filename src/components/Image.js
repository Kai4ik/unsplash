import React, { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 22vw;
  height: 320px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-out;
  transform: scale(${(props) => props.scaleLevel});
  @media only screen and (max-width: 768px) {
    width: 42vw;
    height: 240px;
  }
`;

const ImageItself = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.div`
  height: 20%;
  width: 100%;
  background: #f9f9f9;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  transition: transform 0.3s linear;
  transform: translateY(${(props) => props.hovered});
`;

const Image = ({ document, setImageToShow }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <ImageContainer
      onClick={() => setImageToShow(document)}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      scaleLevel={hovered ? "1.1" : "1"}
    >
      <ImageItself src={document.imageURL}></ImageItself>
      <Name hovered={hovered ? "0%" : "100%"}> {document.label}</Name>
    </ImageContainer>
  );
};

export default Image;
