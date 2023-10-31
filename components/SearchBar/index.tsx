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
        width: "80%",
        height: "30%",
      }}
    >
      <Form.Control
        placeholder="검색어를 입력하세요"
        aria-label="search"
        aria-describedby="search1"
        onChange={SearchProduct}
      />
    </InputGroup>
  );
};

export default SearchBar;
