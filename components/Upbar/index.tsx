"use client";
import styled from "@emotion/styled";

import Search from "@components/Search";

const UpbarContainer = styled.div`
  display: flex;
  padding-left: 88vw;
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
  opacity: 0.7;
`;

const Upbar = () => {
  return (
    <UpbarContainer>
      <Search />
    </UpbarContainer>
  );
};

export default Upbar;
