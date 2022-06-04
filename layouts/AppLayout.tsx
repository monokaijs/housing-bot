import React from "react";
import {Header} from "../components/Header";
import {Layout} from "antd";

export const AppLayout = ({children}) => {
  return (
    <>

      <Layout>
        <Layout className="app-container">
          <Header/>
          <Layout className={"app-layout"}>
            {children}
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}
