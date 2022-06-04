import React from "react";
import {Typography} from "antd";

export const Header = () => {
  return (
    <div className={"header d-flex justify-space-between"}>
      <div className={"logo"}>
        <a href={"/"}>
          <img src={"/img/logo.png"} style={{height: 48}}/>
        </a>
      </div>
      <div className={"nav-links"}>
        <a href={"/explore"}>
          <Typography.Text>
            Khám phá
          </Typography.Text>
        </a>
        <a href={"/contact"} className={"ml-4"}>
          <Typography.Text>
            Liên hệ
          </Typography.Text>
        </a>
      </div>
    </div>
  )
}
