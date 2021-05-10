import "rc-texty/assets/index.css";

import { Button, Typography } from "antd";
import particlesOptions from "assets/particles.json";
import ReactLoveIcon from "components/utilities/LogoIcon";
import RcQueueAnim from "rc-queue-anim";
import Texty from "rc-texty";
import React, { FunctionComponent } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import Particles, { ISourceOptions } from "react-tsparticles";
import { appConfig, routePath } from "utils/config";
import { messages } from "utils/locale";

import styles from "./home.module.less";

const { Title, Text } = Typography;
const HomePage: FunctionComponent = () => {
  const intl = useIntl();
  // const surveyBtnFn = () =>
  //     message.warn(
  //         intl.formatMessage(messages.error.unavailable, {
  //             function: intl.formatMessage(messages.sidebar.menu.survey),
  //         }),
  //     );
  const opts = particlesOptions as ISourceOptions;
  return (
    <div className={styles.bannerBlock}>
      <RcQueueAnim key="QueueAnim" type={["bottom", "top"]} delay={200} className={styles.textWrapper}>
        <Title key={"siteName"} className={styles.siteName} code>
          <ReactLoveIcon /> React Fortune
        </Title>
        <Text key={"siteSlogan"} className={styles.siteSlogan}>
          <Texty type={"scaleBig"} split={str => str.split(/(\S+\s+)/)}>
            {intl.formatMessage(messages.app.title)}
          </Texty>
        </Text>
        <div key={"buttons"}>
          <Link to={routePath.SCHEDULE} component={Button} className={styles.btn}>
            {intl.formatMessage(messages.sidebar.menu.scheduler)}
          </Link>
          <Link to={routePath.SHARED_DOCUMENTS} className={styles.btn} component={Button}>
            {intl.formatMessage(messages.sidebar.menu.document)}
          </Link>
        </div>
      </RcQueueAnim>
      <Particles options={opts} className={styles.particlesBlock} />
    </div>
  );
};
export default HomePage;
