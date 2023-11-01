import styled from "@emotion/styled";

export const ChartMainContainer = styled.div`
  width: 90vw;
  height: 7vh;

  font-family: "Gmarket";
  margin-top: 5vh;
  padding-bottom: 2vh;
  padding-left: 2vh;
  border-bottom: 0.5px solid lightgray;
`;

export const ChartProductImage = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  /* margin-bottom: 3vh; */
  margin-right: 6vh;
`;

export const ChartProductName = styled.div`
  margin-bottom: 3vh;
  margin-right: 5vh;
  display: flex;
  width: 100vw;
  align-items: center;
  & .PRDate {
    margin-left: 18vh;
    font-size: 10px;
  }
`;

export const ChartProductPrice = styled.div`
  /* margin-bottom: 3vh; */
`;

export const CHartProduct = styled.div`
  display: flex;
`;
