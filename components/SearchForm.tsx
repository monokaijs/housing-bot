import React from "react";
import {Button, Carousel, Col, DatePicker, Input, Row, Select} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons"

export const SearchForm = () => {
  return (
    <div className={"search-form"} style={{position: "relative"}}>
      <div className={"search-input"}>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={8} xl={8}>
            <div className={"section"}>
              <div className={"title"}>ĐỊA CHỈ</div>
              <div>
                <Select size={"large"} className={"input-address"}>
                  <Select.Option>
                    66 Giai Phong
                  </Select.Option>
                </Select>
              </div>
              <div className={"address-detail mt-2"}>
                66 Giai Phong, Tan Phu, HCMC
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} xl={8}>
            <div className={"section"}>
              <div className={"title"}>THỜI GIAN LƯU TRÚ</div>
              <div>
                <Select size={"large"} className={"input-address"}>
                  <Select.Option>
                    30 ngày
                  </Select.Option>
                </Select>
              </div>
              <div className={"address-detail mt-2"}>
                Tối thiểu 30 ngày
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} xl={8}>
            <div className={"section"}>
              <div className={"title"}>THỜI ĐIỂM NHẬN PHÒNG</div>
              <div>
                <DatePicker size={"large"} className={"input-address"}/>
              </div>
              <div className={"address-detail mt-2"}>
                Chỉ nhận đặt phòng trước tối đa 30 ngày
              </div>
            </div>
          </Col>
        </Row>
        <Button size={"large"} className={"order-btn"}>
          Đặt chỗ ngay
          <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  )
}
