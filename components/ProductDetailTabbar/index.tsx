import styled from "@emotion/styled";
import Link from "next/link";

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
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

const ChatBtn = styled.div`
  background-color: black;
  color: white;
  width: 80px;
  height: 40px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const PriceTab = styled.div``;

const TabBar = () => {
  //   const [pricest, setPricest] = useState(Price.Price);

  return (
    <TabBarContainer>
      <PriceTab>
        <div></div>
        <div>가격제안 불가</div>
      </PriceTab>
      <Link href="/chat">
        <ChatBtn>채팅하기</ChatBtn>
      </Link>
    </TabBarContainer>
  );
};

export default TabBar;
