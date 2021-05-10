import { GithubOutlined, HeartFilled } from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import ReactLoveIcon from "components/utilities/LogoIcon";
import dayjs from "dayjs";
import React, { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { appConfig, routePath } from "utils/config";

import { messages } from "../utils/locale";
import styles from "./app.module.less";
import AppRoute from "./AppRoute";
import LocaleSelect from "./Header/LocaleSelect";
import MenuSidebar from "./Sidebar/Menu";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const AppLayout: FunctionComponent = () => (
  <Router>
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Link to={routePath.HOME} className={styles.logo}>
          <ReactLoveIcon className={styles.logoIcon} />
          <Title copyable={false} level={3} className={styles.logoText}>
            React Fortune
          </Title>
        </Link>
        <MenuSidebar />
      </Sider>
      <Layout className={styles.appLayout}>
        <Header className={styles.appHeader}>
          <div className={styles.headerRight}>
            <Button icon={<GithubOutlined />} href={appConfig.repoURL} target={"_blank"} className={styles.gitButton} />
            <LocaleSelect />
          </div>
        </Header>
        <Content className={styles.appContent}>
          <AppRoute />
        </Content>
        <Footer className={styles.appFooter}>
          <FormattedMessage {...messages.app.footer} values={{ year: dayjs().year() }} />{" "}
          <HeartFilled className={styles.heartIcon} />
        </Footer>
      </Layout>
    </Layout>
  </Router>
);

export default AppLayout;
