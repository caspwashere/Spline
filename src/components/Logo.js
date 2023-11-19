import React from "react";
import styled from "styled-components";

import * as TextStyles from "../TextStyles";

function Logo() {
  return (
    <Wrapper>
      <Container>
        <Title>
          Chill <span>Room</span>
        </Title>
      </Container>
    </Wrapper>
  );
}

export default Logo;

const Wrapper = styled.div`
  width: fit-content;
  background: linear-gradient(
    180deg,
    rgba(153, 160, 169, 0.5) 0%,
    #ffffff 100%
  );
  box-shadow: 4px 4px 20px rgba(142, 155, 174, 0.1);
  padding: 5px 5px 5px 0px;
  border-radius: 0px 40px 40px 0px;
`;

const Container = styled.div`
  background: linear-gradient(
    106.5deg,
    rgba(255, 215, 185, 0.91) 23%,
    rgba(223, 159, 247, 0.8) 93%
  );
  border-radius: 0px 40px 40px 0px;
  border: 0.5px solid;
  border-image-source: linear-gradient(
    143.97deg,
    rgba(0, 0, 0, 0.3) 20.26%,
    rgba(0, 0, 0, 0.4) 85.18%
  );
`;

const Title = styled(TextStyles.H2)`
  color: #ffffff;
  padding: 12px 20px 12px 55px;

  span {
    color: #ffffff;
  }
`;
