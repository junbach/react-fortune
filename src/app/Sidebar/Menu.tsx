import {
  ContactsOutlined,
  FileTextOutlined,
  HomeOutlined,
  PlayCircleOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { FunctionComponent, memo } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useLocation } from "react-router-dom";
import { routePath } from "utils/config";
import { messages } from "utils/locale";

const MenuSidebar: FunctionComponent = () => {
  const location = useLocation();
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[routePath.HOME]} selectedKeys={[location.pathname]}>
      <Menu.Item key={routePath.HOME} icon={<HomeOutlined />}>
        <Link to={routePath.HOME}>
          <FormattedMessage {...messages.sidebar.menu.home} />
        </Link>
      </Menu.Item>
      <Menu.Item key={routePath.SCHEDULE} icon={<ScheduleOutlined />}>
        <Link to={routePath.SCHEDULE}>
          <FormattedMessage {...messages.sidebar.menu.scheduler} />
        </Link>
      </Menu.Item>
      <Menu.Item key={routePath.SHARED_DOCUMENTS} icon={<FileTextOutlined />}>
        <Link to={routePath.SHARED_DOCUMENTS}>
          <FormattedMessage {...messages.sidebar.menu.document} />
        </Link>
      </Menu.Item>
      <Menu.Item key={routePath.RECORD} icon={<PlayCircleOutlined />}>
        <Link to={routePath.RECORD}>
          <FormattedMessage {...messages.sidebar.menu.record} />
        </Link>
      </Menu.Item>
      <Menu.Item key={routePath.CONTACT} icon={<ContactsOutlined />}>
        <Link to={routePath.CONTACT}>
          <FormattedMessage {...messages.sidebar.menu.contact} />
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default memo(MenuSidebar);
