import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  font-size: 1.4rem;
  background: #efb6b2;
`;

const Footer = () => {
  return (
    <FooterContainer>
      Don't forget to upload an image :) Have a good day!
    </FooterContainer>
  );
};

export default Footer;
