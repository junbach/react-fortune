import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { FunctionComponent, memo } from "react";

const LoadingComponent: FunctionComponent = () => {
  const icon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return <Spin indicator={icon} />;
};

export default memo(LoadingComponent);
