import React, { useState } from "react";
import styled from "styled-components";
import AddForm from "./AddForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding: 0 4rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 220px;
    margin-top: 2vh;
  }
`;

const HeaderLeftColumn = styled.div`
  display: flex;
  gap: 50px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
  }
`;

const AppTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 2rem;
`;

const TitleText = styled.h2`
  font-size: 1.8rem;
  font-family: "Mochiy Pop P One", sans-serif;
`;

const SearchBar = styled.input`
  width: 260px;
  height: 56px;
  font-size: 1.2rem;
  padding: 0rem 1rem;
  border: 2px solid #d5d5d5;
  border-radius: 12px;
  outline: none;
`;

const FileLabel = styled.label`
  height: 60px;
  background: #3db46d;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 2px;
  color: white;
  transition: opacity 0.5s ease-out;
  opacity: ${(props) => props.show};
`;

const Header = ({ setSearchValue, searchValue }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <HeaderContainer>
      <HeaderLeftColumn>
        <AppTitle>
          <FontAwesomeIcon icon={faCameraRetro} />
          <TitleText> Unsplash </TitleText>
        </AppTitle>
        <SearchBar
          type="text"
          placeholder="Search by name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </HeaderLeftColumn>
      <AddForm showForm={showForm} setShowForm={setShowForm} />
      <FileLabel onClick={() => setShowForm(true)} show={showForm ? "0" : "1"}>
        Upload an image
      </FileLabel>
    </HeaderContainer>
  );
};

export default Header;
