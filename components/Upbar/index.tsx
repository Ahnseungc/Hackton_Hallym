"use client";
import styled from "@emotion/styled";

import Search from "@components/Search";

const UpbarContainer = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 100vw;
`;

const Upbar = () => {
  return (
    <UpbarContainer>
      <Search />
    </UpbarContainer>
  );
};

export default Upbar;
