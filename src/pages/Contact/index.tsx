import { DiscussionEmbed } from "disqus-react";
import React, { FunctionComponent, memo } from "react";
import { useLocation } from "react-router-dom";
import { appConfig } from "utils/config";

import styles from "./contact.module.less";

const ContactPage: FunctionComponent = () => {
  const location = useLocation();
  const cfg = {
    identifier: location.pathname,
    title: appConfig.siteName,
  };
  return (
    <div className={styles.pageLayout}>
      <DiscussionEmbed shortname={appConfig.disqus} config={cfg} />
    </div>
  );
};
export default memo(ContactPage);
