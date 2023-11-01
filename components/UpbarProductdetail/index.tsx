"use client";

import styled from "@emotion/styled";

import BackBtn from "@components/BackBtn";

const UpbarContainer = styled.div`
  display: flex;
  padding-left: 3vw;
  padding-top: 5px;
  align-items: center;

  height: 5vh;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100vw;
  background-color: #171717;
  opacity: 0.5;
`;

const UpbarProductdetail = () => {
    return (
        <UpbarContainer>
            <BackBtn/>
        </UpbarContainer>
    );
};

export default UpbarProductdetail;
