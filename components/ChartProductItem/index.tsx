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
      <ChartProductImage>{PImage}</ChartProductImage>
      <CHartProduct>
        <ChartProductName>{PName}</ChartProductName>
        <ChartProductPrice>{PPrice}</ChartProductPrice>
      </CHartProduct>
    </ChartMainContainer>
  );
};

export default ChartProductItem;
