import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import ModalWindow from "./components/ModalWindow";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    font-family: "Mochiy Pop P One", sans-serif;
  }
`;

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [imageToShow, setImageToShow] = useState(null);

  return (
    <div className="App">
      <GlobalStyles />
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Gallery searchValue={searchValue} setImageToShow={setImageToShow} />
      <ModalWindow data={imageToShow} setImageToShow={setImageToShow} />
      <Footer />
    </div>
  );
}

export default App;
