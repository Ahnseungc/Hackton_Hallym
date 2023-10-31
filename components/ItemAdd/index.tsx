"use client";

import { useState } from "react";
import "./style.css";

const ItemAddModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const html = document.querySelector("html");

  console.log(html);

  //스크롤 락
  const openModal = () => {
    setIsModalOpened(true);
    html?.classList.add("scroll-locked");
  };
  const closeModal = () => {
    setIsModalOpened(false);
    html?.classList.remove("scroll-locked");
  };

  return (
    <>
      <div onClick={openModal}>
        <>상품등록하러가기</>
      </div>
      {isModalOpened ? (
        <div onClick={closeModal} className="modal-bottom">
          <div
            style={{
              width: "380px",
              height: "95vh",
              background: "white",
              zIndex: "99",
              position: "fixed",
              bottom: "0",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
          >
            모달
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default ItemAddModal;
