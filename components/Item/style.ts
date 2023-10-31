import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;

  height: 100px;
  padding: 5px 5px 17px 5px;
  border-bottom: 0.5px solid lightgray;
  margin-top: 3vh;
  align-items: center;

  & .ProductDate {
    /* margin-top: 6vh; */

    text-align: left;
    font-size: 9px;
    color: darkgray;
  }
`;

export const Photo = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
  border-radius: 20px;
  text-align: center;
  margin-right: 5vh;

  & img {
    object-fit: fill;
  }
`;
