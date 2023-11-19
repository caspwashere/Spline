import "./styles.css";
import React, { useState } from "react";
import styled from "styled-components";
import * as TextStyles from "./TextStyles";

import Header from "./components/Header";
import Logo from "./components/Logo";
import PlayButton from "./components/PlayButton";
import DownloadButton from "./components/DownloadButton";
import SplineScene from "./components/SplineScene";
import CloseButton from "./components/CloseButton";

import DownloadFile from "./smart_home_final.spline.zip";
import ImageControl from "./images/controls.png";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper className="App">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ContentWrapper>
        <Container>
          <TextContainer>
            <Title>HAPPY BIRTHDAY</Title>
            <Title>DANNY ;)</Title>
            <Description>
              In realms of tales spun from the digital haze, Danielle, a gem
              with a heart ablaze. In the quiet glow of her phone's soft light,
              She finds solace in fanfiction's delight.
            </Description>

            <Description>
              With laws and statutes, she dances with grace, A scholar of
              justice in every case. Her mind, a canvas where intellect blooms,
              In the courtroom, she dispels life's glooms.
            </Description>

            <Description>
              On this, her 21st, a milestone grand, A celebration, like grains
              of sand. Law books set aside, for joy to unfurl, As candles
              flicker for this bright-eyed girl.
            </Description>

            <Description>
              Maine Coon whispers in the moonlit night, Furry companions, a pure
              delight. Their gentle purrs, a melody sweet, In their company,
              Danielle finds retreat.
            </Description>

            <Description>
              So here's to Danielle, a radiant star, Whose journey's written,
              near and far. May the chapters ahead be filled with glee, Happy
              21st, Danielle, be wild and free!
            </Description>
          </TextContainer>
          <ButtonContainer>
            <PlayButton onClick={() => setIsOpen(true)} />
          </ButtonContainer>
          <GradientLine />
        </Container>
        <SplineContainer isOpen={isOpen}>
          <Header />
          <CloseButton isOpen={isOpen} onClick={() => setIsOpen(false)} />
          <SplineScene />
        </SplineContainer>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 955px;
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    align-content: center;
    padding-bottom: 40px;
  }
`;

const Container = styled.div`
  position: relative;
`;

const SplineContainer = styled.div`
  position: ${(props) => (props.isOpen ? "fixed" : "relative")};
  padding: ${(props) => (props.isOpen ? "0px" : "24px 20px 24px 0px")};

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

  .spline {
    border-radius: ${(props) => (props.isOpen ? "0px" : "20px")};
  }

  .closeButton {
    top: 54%;
    left: -32px;
  }

  @media (max-width: 1400px) {
    padding: ${(props) => (props.isOpen ? "0px" : "0px 20px 10px")};

    .closeButton {
      top: -44px;
      left: 50%;
      margin-left: -50px;
      transform: rotate(90deg);
    }
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
`;

const TextContainer = styled.div`
  display: grid;
  gap: 24px;
  max-width: 460px;
  padding: 225px 0px 0px 56px;

  @media (max-width: 560px) {
    padding: 145px 20px 0px;
  }
`;

const Title = styled(TextStyles.H1)``;

const Description = styled.p`
  max-width: 360px;
  text-align: left;
  font-family: "Inter", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  gap: 20px;
  background: linear-gradient(
    270deg,
    #f1f1f1 12.86%,
    rgba(255, 255, 255, 0) 83.72%
  );
  mix-blend-mode: normal;
  padding: 40px 0px 40px 56px;
  margin-top: 53px;

  a {
    text-decoration: none;
  }

  @media (max-width: 560px) {
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
    align-content: center;
    padding: 32px 20px;
    margin-top: 40px;
  }
`;

const GradientLine = styled.div`
  width: 100%;
  height: 48px;
  background: linear-gradient(
    185deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0) 50%
  );

  @media (max-width: 1400px) {
    display: none;
  }
`;

const ControlContainer1 = styled.div`
  display: block;
  @media (max-width: 1400px) {
    display: none;
  }
`;

const ControlContainer2 = styled.div`
  display: none;
  @media (max-width: 1400px) {
    display: block;
  }
`;

const Subtitle = styled(TextStyles.BodyMain)`
  color: rgba(0, 0, 0, 0.6);
  margin-top: 14px;
  padding-left: 56px;

  @media (max-width: 560px) {
    padding: 8px 20px;
  }
`;

const ControlImage = styled.img`
  max-width: 326px;
  padding: 14px 0px 0px 56px;

  @media (max-width: 560px) {
    padding: 8px 20px;
  }
`;
