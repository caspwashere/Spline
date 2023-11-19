import React from "react";
import styled from "styled-components";

import * as TextStyles from "../TextStyles";

function PlayButton(props) {
  const { onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <Container>
        <Circle>
          <MiniCircle />
        </Circle>
        <Title>Enter Room</Title>
      </Container>
    </Wrapper>
  );
}

export default PlayButton;

const Wrapper = styled.div`
  width: 210px;
  background: linear-gradient(
    106.5deg,
    rgba(255, 215, 185, 0.91) 23%,
    rgba(223, 159, 247, 0.8) 93%
  );
  box-shadow: 4px 4px 20px rgba(142, 155, 174, 0.1);
  border-radius: 30px;
  padding: 4px 5px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  :hover {
    transform: translateY(-2px);
  }
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  background: linear-gradient(
    106.5deg,
    rgba(255, 215, 185, 0.91) 23%,
    rgba(223, 159, 247, 0.8) 93%
  );
  border-radius: 30px;
  padding: 8px;
  border: 0.5px solid;
  border-image-source: linear-gradient(
    143.97deg,
    rgba(0, 0, 0, 0.3) 20.26%,
    rgba(0, 0, 0, 0.4) 85.18%
  );
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(
    106.5deg,
    rgba(255, 215, 185, 0.91) 23%,
    rgba(223, 159, 247, 0.8) 93%
  );
  border-radius: 40px;
`;

const MiniCircle = styled.div`
  width: 14px;
  height: 14px;
  background: linear-gradient(180deg, #9a97ff 0%, #eee9fe 100%);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 4px auto;
`;

const Title = styled(TextStyles.BodyMain)`
  color: #ffffff;
`;
