import Button from "./styled/Button";
import Flex from "./styled/Flex";
import Image from "./styled/Image";
import Nav from "./styled/Nav";

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <img src="./images/logo_white.png" alt="logo" width="300px" />
        </div>

        <div>
          <Button color="#7284AC">Talk To Adviser</Button>
          <Button bg="#7284AC">Contact Us</Button>
        </div>
      </Nav>
      <Flex>
        <div>
          <h1>ATTORNEYS AT LAW</h1>
          <p>
            Are you in need of legal assistance? Look no further! Our team of
            experienced attorneys is here to help you with all your legal needs.
          </p>
          <p>
            We specialize in a wide range of legal services, including personal
            injury, family law, criminal defense, and more. Our team is
            dedicated to providing you with personalized attention and
            exceptional service, ensuring that your case is handled with the
            utmost care and attention to detail.
          </p>

          <Button bg="#7284AC">Get Legal Advice Now</Button>
        </div>
        <Image src="./images/hero.jpg" />
      </Flex>
    </div>
  );
};

export default Header;
