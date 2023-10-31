import React from "react";

type Props = {};

function Productdetail({}: Props) {
  return (
    <div>
      <div className="image">이미지</div>
      <div className="username">username</div>
      <div className="Productname">Productname</div>
      <div className="Productdetail">Productdetail</div>
      <div className="HopePlace">
        <div className="HopePalceName">HopePalceName</div>
        <div className="HopePlaceImage">HopePlaceImage</div>
      </div>
    </div>
  );
}

export default Productdetail;
