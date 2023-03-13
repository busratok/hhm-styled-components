import React from "react";
import SocialIcons from "./SocialIcons";
import Container from "./styled/Container";
import Flex from "./styled/Flex";
import StyledFooter from "./styled/Footer.Styled";
import Image from "./styled/Image";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <Image src="./images/logo.png" alt="" />
        </Flex>

        <Flex>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
