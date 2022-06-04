import React from "react";
import {Divider} from "antd";

export const ManageNavBar = () => {
  return (
    <div className={"manage-nav"} style={{width: '100%'}}>
      <Divider className={"mb-3"}/>
      <a>
        Manage
      </a>
      <Divider className={"mt-3"}/>
    </div>
  )
}
