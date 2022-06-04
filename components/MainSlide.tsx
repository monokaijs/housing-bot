import React from "react";
import {Carousel, Col, Row} from "antd";

export const MainSlide = () => {
  return (
    <Carousel>
      <div className={"home-carousel-slide"}>
        <div className={"bg"}/>
        <div className={"content"}>
          <Row>
            <Col xs={24} md={20} xl={16} xxl={14}>
              <h1>
                Work, live, enjoy
              </h1>
              <span>Hệ thống nhà ở giá rẻ tại thành phố Hồ Chí Minh với chất lượng phục vụ tốt.</span>
              <div className={"pt-4"} style={{fontWeight: "bold"}}>
                <a style={{color: "#000"}} href={"/explore"}>Tìm hiểu thêm →</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Carousel>
  )
}
