import { CopyOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import React, { FunctionComponent, memo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { appConfig } from "utils/config";
import { messages } from "utils/locale";

import styles from "./document.module.less";

enum ViewMode {
  DETAIL = "list",
  SIMPLE = "grid",
}
const DocumentPage: FunctionComponent = () => {
  const [mode, setMode] = useState(ViewMode.DETAIL);
  const driveURL = `${appConfig.driveURL}#${mode}`;
  return (
    <div className={styles.pageLayout}>
      <Radio.Group value={mode} buttonStyle={"solid"} onChange={e => setMode(e.target.value)}>
        <Radio.Button value={ViewMode.DETAIL}>
          <UnorderedListOutlined className={styles.viewIcon} />
          <FormattedMessage {...messages.page.document.view.detail} />
        </Radio.Button>
        <Radio.Button value={ViewMode.SIMPLE}>
          <CopyOutlined className={styles.viewIcon} />
          <FormattedMessage {...messages.page.document.view.simple} />
        </Radio.Button>
      </Radio.Group>
      <iframe src={driveURL} className={styles.driveIframe} title="document-drive" />
    </div>
  );
};
export default memo(DocumentPage);
