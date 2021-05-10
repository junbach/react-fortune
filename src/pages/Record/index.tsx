import React, { FunctionComponent, memo } from "react";
import { appConfig } from "utils/config";

import styles from "./record.module.less";

const RecordPage: FunctionComponent = () => {
  return (
    <div className={styles.pageLayout}>
      <iframe
        src={appConfig.recordPlaylist}
        className={styles.youtubeIframe}
        title="React14 Playlist recordings"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
export default memo(RecordPage);
