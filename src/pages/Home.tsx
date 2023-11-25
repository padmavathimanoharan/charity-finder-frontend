// pages/Home.tsx
import React from "react";
import Search from "../components/Search";
import CharityList from "../components/CharityList";
import { Container, Row, Col } from "react-bootstrap";
import charityBg from "../assets/charity_bg.png";

interface Charity {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  // Fetch and pass charities to CharityList
  const charities: Charity[] = []; // Define the type explicitly

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Charity Finder</h1>
          <img
            src={charityBg}
            alt="Background"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
          />
          <Search />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Featured Charities</h3>
          <CharityList charities={charities} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
