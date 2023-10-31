import { ChartMainContainer, ChartProductName } from "./style";

interface Props {
  Title: String;
  Detail: String;
}

const ChartProductItem = ({ Title, Detail }: Props) => {
  console.log(Title, Detail);
  return (
    <ChartMainContainer>
      <h5>{Title}</h5>
      <ChartProductName>{Detail}</ChartProductName>
    </ChartMainContainer>
  );
};

export default ChartProductItem;
