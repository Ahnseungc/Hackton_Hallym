import styled from "@emotion/styled";

export const ChartMainContainer = styled.div`
  width: 90vw;
  height: 7vh;
  display: flex;
  align-items: center;
  margin-top: 5vh;
  border-bottom: 0.5px solid lightgray;
  justify-content: center;
`;

export const ChartProductImage = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 10px;
  margin-bottom: 3vh;
  margin-right: 6vh;

  & img {
    object-fit: cover;
  }
`;

export const ChartProductName = styled.div`
  margin-bottom: 3vh;
  margin-right: 5vh;
`;

export const ChartProductPrice = styled.div`
  margin-bottom: 3vh;
`;

export const CHartProduct = styled.div`
  display: flex;
`;
