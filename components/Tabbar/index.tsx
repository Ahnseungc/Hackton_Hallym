import React from "react";

import styled from "@emotion/styled";
import Link from "next/link";
import {FiBarChart, FiHome, FiSquare, FiUsers} from "react-icons/fi";

const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

const TabIcon = styled.div`
  font-size: 24px;
  color: black;
`;

const TabBar = () => {
    return (
        <TabBarContainer>
            <Link href="/">
                <TabIcon>
                    <FiHome/>
                </TabIcon>
            </Link>
            <Link href="/helper">
                <TabIcon>
                    <FiUsers/>
                </TabIcon>
            </Link>
            <Link href="/priceinquiry">
                <TabIcon>
                    <FiBarChart/>
                </TabIcon>
            </Link>
            <Link href="/home">
                <TabIcon>
                    <FiSquare/>
                </TabIcon>
            </Link>
        </TabBarContainer>
    );
};

export default TabBar;
