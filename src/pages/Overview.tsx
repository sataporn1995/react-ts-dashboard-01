import React from "react";
import { Container } from "react-bootstrap";

import { ContentWrapper, FramerMotion } from "../components/page-wrapper";

const Overview: React.FC = () => {
  return (
    <ContentWrapper>
      <FramerMotion>
        <Container fluid className="vh-90 set-items-center">
          <h1 className="text-light title-text-shadow">OVERVIEW</h1>
        </Container>
      </FramerMotion>
    </ContentWrapper>
  );
}

export default Overview;
