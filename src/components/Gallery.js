import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "./Image";
import useFirestore from "../firebase/firestoreHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8vh 0;
  gap: 2vw;
  flex-wrap: wrap;
  width: 100vw;
  padding: 0 10vw;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    padding: 0 2vw;
    gap: 4vw;
  }
`;

const NoImagesContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 2rem;
  color: #efb6b2;
`;

const SadIcon = styled.div`
  margin-top: 4px;
`;

const Gallery = ({ searchValue, setImageToShow }) => {
  const { docs } = useFirestore("images");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(docs);
  }, [docs]);

  useEffect(() => {
    const filteredData = docs.filter((elem) =>
      elem.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (searchValue === "") setData(docs);
    else setData(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return data.length > 0 ? (
    <GalleryContainer>
      {data.map((document) => (
        <Image
          key={document.id}
          document={document}
          setImageToShow={setImageToShow}
        />
      ))}
    </GalleryContainer>
  ) : (
    <NoImagesContainer>
      No images yet
      <SadIcon>
        <FontAwesomeIcon icon={faSadTear} />
      </SadIcon>
    </NoImagesContainer>
  );
};

export default Gallery;
