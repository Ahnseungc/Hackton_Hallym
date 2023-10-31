import React from "react";

import Link from "next/link";

import ItemList from "@components/ItemList";

function Home() {
  return (
    <div>
      <Link
        href={"/productdetail"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <ItemList />
      </Link>
    </div>
  );
}

export default Home;
