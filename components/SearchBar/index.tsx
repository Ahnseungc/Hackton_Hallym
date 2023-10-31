"use client";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

interface Props {
  SearchProduct: (e: any) => void;
}

const SearchBar = ({ SearchProduct }: Props) => {
  return (
    <InputGroup
      size="lg"
      style={{
        width: "100%",
        height: "60%",
        transition: "0.5s ease-inout",
      }}
    >
      <Form.Control
        placeholder="원하는 제품을 찾으세요"
        aria-label="search"
        aria-describedby="search1"
        style={{
          height: "3vh",
          width: "35vw",
          fontSize: "10px",
          borderRadius: "20px",
          color: "#3182f6",
          marginLeft: "3vh",
        }}
        onChange={SearchProduct}
      />
    </InputGroup>
  );
};

export default SearchBar;
