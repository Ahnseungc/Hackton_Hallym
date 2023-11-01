import {
  ChartMainContainer,
  CHartProduct,
  ChartProductImage,
  ChartProductName,
  ChartProductPrice,
} from "./style";

interface Props {
  PImage: String;
  PName: String;
  PPrice: String;
}

const ChartProductItem = ({ PImage, PName, PPrice }: Props) => {
  console.log(PImage, PName, PPrice);
  return (
    <ChartMainContainer>
      <ChartProductImage>
        <img src={`${PImage}`} alt="/" width={"100px"} height={"70px"} />
      </ChartProductImage>
      <CHartProduct>
        <ChartProductName>{PName}</ChartProductName>
        <ChartProductPrice>{PPrice}</ChartProductPrice>
      </CHartProduct>
    </ChartMainContainer>
  );
};

export default ChartProductItem;
