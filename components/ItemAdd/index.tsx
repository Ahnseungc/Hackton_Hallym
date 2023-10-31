"use client";

import "bootstrap/dist/css/bootstrap.css";
import { useRef, useState } from "react";
import "./style.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FiPlus } from "react-icons/fi";

import KaKaMap from "@components/KaKaoMap";

const ItemAddModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const html = document.querySelector("html");
  const ref = useRef();

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
        {
          <div
            style={{
              backgroundColor: "#3182f6",
              width: "100px",
              height: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              color: "white",
              borderRadius: "20px",
              opacity: "1",
              fontWeight: "400",
              padding: "5px",
              position: "fixed",
              marginLeft: "67vw",
            }}
          >
            + 글쓰기
          </div>
        }
      </div>
      {isModalOpened ? (
        <div className="modal-bottom" ref={ref}>
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
            <Container className="panel">
              <Button
                style={{
                  borderRadius: "10px",
                  marginLeft: "38vh",
                  marginTop: "3vh",
                }}
                onClick={closeModal}
              >
                X
              </Button>
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                  style={{
                    marginTop: "3vh",
                  }}
                >
                  <Col sm>
                    <Form.Control type="file" placeholder="UserID" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Col sm>
                    제목
                    <Form.Control type="id" placeholder="제목" />
                  </Col>
                  <Col sm>
                    <Form.Control
                      type="password"
                      placeholder="₩ 가격을 입력해주세요"
                    />
                  </Col>

                  <Col sm>
                    자세한 설명
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                    ></textarea>
                  </Col>
                  <Col sm>
                    SAFE ZONE
                    <KaKaMap />
                  </Col>
                </Form.Group>
                <br />

                <div className="d-grid gap-1">
                  <Button variant="secondary" type="submit">
                    작성 완료
                  </Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default ItemAddModal;
