import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;

  padding: 15px;
  border-bottom: 0.5px solid lightgray;

  align-items: center;
  justify-content: center;

  .Product {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-right: 20px;
  }

  .ProductName {
    font-size: 17px;
    font-weight: bolder;
    color: #171717;
  }

  .ProductPrice {
    font-size: 15px;
    color: #1E293B;
  }

  & .ProductDate {
    /* margin-top: 6vh; */

    text-align: left;
    font-size: 9px;
    color: darkgray;
  }
`;

export const Photo = styled.div`
  border-radius: 20px;
  text-align: center;
  margin-right: 20px;

  & img {
    object-fit: fill;
  }
`;
