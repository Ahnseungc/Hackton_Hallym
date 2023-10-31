"use client";

import styled from "@emotion/styled";
import Link from "next/link";

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
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0.5;
`;

const UpbarProductdetail = () => {
  return (
    <UpbarContainer>
      {/* <Link href={"/"} style={{ color: "black", textDecoration: "none" }}> */}
      <BackBtn />
      {/* </Link> */}
    </UpbarContainer>
  );
};

export default UpbarProductdetail;
