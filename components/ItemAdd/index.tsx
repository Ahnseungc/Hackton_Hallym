"use client";

import "bootstrap/dist/css/bootstrap.css";
import { use, useEffect, useRef, useState } from "react";
import "./style.css";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import useGeolocation from "@components/Geolocation";

const ItemAddModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isImage, setIsImage] = useState([]);

  //post 전송
  const [images, setImages] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [safezoneId, setSafezoneId] = useState(0);

  // const onClickPost = (e)=>{
  //     event.preventDefault();
  //     const formData = new FormData();
  // }

  // const handleimage =(e:any)=>{
  //   event.preventDefault();
  //   setImages(e)

  // }

  const location = useGeolocation();

  const html = document.querySelector("html");
  const ref = useRef();

  useEffect(() => {
    const Safezone = axios
      .get("http://10.50.227.158:3000/safezone", {
        params: {
          latitude: location.coordinates.latitude,
          longitude: location.coordinates.longitude,
        },
      })
      .then((res) => {
        setIsImage(res.data);
      })
      .catch((err) => console.log(err));
  }, [location]);

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
                      type="number"
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingLeft: "5vw",
                        borderRadius: "20px",
                      }}
                    >
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        className={`w-[20rem] h-[10rem] md:w-[30rem] md:h-[15rem] lg:w-[61rem] my-6 max-w-[500px] md:max-w-[976px] max-h-[15rem] `}
                      >
                        {isImage.map((e: any, index: any) => {
                          return (
                            <SwiperSlide key={index}>
                              <img
                                src={`${e.image}`}
                                alt="/"
                                width={"300px"}
                                height={"180px"}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
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
