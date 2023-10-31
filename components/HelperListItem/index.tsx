import { ChartMainContainer, ChartProductName } from "./style";

interface Props {
  Title: String;
  Detail: String;
  Date: String;
}

const ChartProductItem = ({ Title, Detail, Date }: Props) => {
  return (
    <ChartMainContainer>
      <h5>{Title}</h5>
      <ChartProductName>
        {Detail}
        <div className="PRDate">{Date}</div>
      </ChartProductName>
    </ChartMainContainer>
  );
};

export default ChartProductItem;
