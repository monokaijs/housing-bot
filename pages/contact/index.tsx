import React from "react";
import {AppLayout} from "../../layouts/AppLayout";
import {Card} from "antd";
import {PushpinOutlined, PhoneOutlined, MailOutlined} from "@ant-design/icons";

const ContactPage = () => {
  return (
    <AppLayout>
      <div className={"mt-8"}>
        <h1 style={{fontSize: 32, fontWeight: 700}}>Liên hệ</h1>
      </div>
      <p>
        Nếu có bất cứ vấn đề trong quá trình tìm kiếm nơi ở hoặc lưu trú, xin vui lòng liên hệ cho Zen Housing qua các
        phương thức sau nhé!
      </p>
      <Card style={{borderRadius: 16}}>
        <div className={"mb-2"}>
          <PushpinOutlined /> Địa chỉ: 66 Giải Phóng, Tân Bình
        </div>
        <div className={"mb-2"}>
          <PhoneOutlined /> (+84) 123 456 789
        </div>
        <div>
          <MailOutlined /> cskh@zenhousing.vn
        </div>
      </Card>
    </AppLayout>
  )
};

export default ContactPage;
