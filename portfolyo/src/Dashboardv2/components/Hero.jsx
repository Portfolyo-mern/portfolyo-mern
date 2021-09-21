import React from "react";
import styled from "styled-components";
import image from "../assets/hero.png";
import bg from "../assets/bg.png";
import HeroText from "./HeroText";
import Tilt from "react-tilt";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Hero = (props) => {
  return (
    <Container  bg={bg}>
      <Wrapper >
        <InnerWrapper  >
          <Left style={{marginBottom:"1.6rem"}}>
              <HeroText username={props.username} />
          </Left>
            <TiltWrapper  options={{ max: 25 }}>
          <Flip  left>
              <Img src={image} alt="pic" />
          </Flip>
            </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const InnerWrapper = styled.div`
  max-width:1400px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(px);
    backdrop-filter: blur(1px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding:0;
`;

export default Hero;
