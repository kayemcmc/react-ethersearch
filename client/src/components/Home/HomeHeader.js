import React from "react";
import styled from "styled-components";

export default ({ style, children }) => {
  return (
    <Hero>
      <div className="container">
        <Heading style={style}>{children}</Heading>
      </div>
    </Hero>
  );
};

const Hero = styled.div`
  background-size: auto 100%;
  height: 600px;
  background-image: url(https://gallery.mailchimp.com/fee238bfe84b47c290a863338/images/bad6c1dd-64a5-4310-920a-d75deb4d3716.png);
  background-repeat: no-repeat;
  background-position: center right;
  @media (max-width: 988px) {
    background-image: none;
    background-color: #5c6ac4;
  }
`;

const Heading = styled.h1`
  line-height: 1.32;
  font-weight: 700;
  letter-spacing: -0.025em;
  font-size: 3em;
  margin-bottom: 0.25em;
  max-width: 43.75em;
  text-align: left;
  padding-top: 200px;
  @media (max-width: 988px) {
    padding-top: 40px;
    font-weight: 400;
  }
`;
