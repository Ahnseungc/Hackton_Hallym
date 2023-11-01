"use client";

import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from "react";
import "./style.css";
import "../../styles/font.css";

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
import { getUserId } from "app/userid.provider";

const ItemAddModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isImage, setIsImage] = useState([]);

  //post 전송
  const [images, setImages] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [safezoneId, setSafezoneId] = useState(0);

  const onClickPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const image of images) {
      formData.append("images[]", image, image.name);
      formData.append("title", title);
      formData.append("description", description);

      formData.append("price", price);

      formData.append("safezoneId", safezoneId);
      formData.append("userId", getUserId().toString());
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const send = axios.post(
      "https://d1xx291z7z5z7p.cloudfront.net/safezone",
      formData
    );
  };

  const handleimage = (e: any) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
    }
  };

  const location = useGeolocation();

  const html = document.querySelector("html");
  const ref = useRef();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const Safezone = axios
      .get("https://d1xx291z7z5z7p.cloudfront.net/safezone", {
        params: {
          latitude: location.coordinates.latitude,
          longitude: location.coordinates.longitude,
        },
      })
      .then((res) => {
        setIsImage(res.data);
        console.log(isImage);
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
              fontSize: "18px",
              color: "white",
              borderRadius: "20px",
              opacity: "1",
              fontWeight: "350",
              padding: "5px",
              position: "fixed",
              marginLeft: "67vw",
              fontFamily: "Gmarket",
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
                    marginTop: "8vh",
                  }}
                >
                  <Col sm>
                    <Form.Control
                      type="file"
                      placeholder="UserID"
                      multiple
                      onChange={handleimage}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Col
                    sm
                    style={{ fontFamily: "GMarket-Regular", marginTop: "5vh" }}
                  >
                    제목
                    <Form.Control
                      type="id"
                      style={{ fontFamily: "GMarket-Regular" }}
                      placeholder="제목"
                      onChange={(event) => setTitle(event.target.value)}
                      value={title}
                    />
                  </Col>
                  <Col sm style={{ marginTop: "5vh" }}>
                    <Form.Control
                      type="number"
                      style={{ fontFamily: "GMarket-Regular" }}
                      placeholder="₩ 가격을 입력해주세요"
                      onChange={(event) => setPrice(event.target.value)}
                    />
                  </Col>

                  <Col
                    sm
                    style={{ fontFamily: "GMarket-Regular", marginTop: "5vh" }}
                  >
                    자세한 설명
                    <textarea
                      onChange={(event) => setDescription(event.target.value)}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                    ></textarea>
                  </Col>
                  <Col
                    sm
                    style={{ fontFamily: "GMarket-Regular", marginTop: "5vh" }}
                  >
                    SAFE ZONE
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2vh",
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
                          console.log(e.id);
                          return (
                            <SwiperSlide
                              key={index}
                              onClick={() => setSafezoneId(e.id)}
                            >
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
                  <Button
                    variant="secondary"
                    type="submit"
                    onClick={onClickPost}
                  >
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
