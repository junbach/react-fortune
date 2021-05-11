import { PicRightOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React, { FunctionComponent, memo, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { getSessionsByCourse, SessionData } from "utils/data/course-session";
import { messages } from "utils/locale";

import Calendar, { dateCellRenderFn } from "./Calendar";
import styles from "./schedule.module.less";
import SessionTimeline from "./SessionTimeline";

const courseID = "REACT001";
const SchedulePage: FunctionComponent = () => {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [visible, setVisible] = useState(false);
  const showTimeline = () => setVisible(true);
  const onCloseTimeline = () => setVisible(false);
  const intl = useIntl();
  useEffect(() => {
    getSessionsByCourse(courseID).then(arr => setSessions(arr));
  }, []);
  return (
    <Space className={styles.pageLayout} direction={"vertical"}>
      <Button onClick={showTimeline} icon={<PicRightOutlined />}>
        {intl.formatMessage(messages.page.schedule.timeline.openDrawerBtn)}
      </Button>
      <Calendar dateCellRender={dateCellRenderFn(sessions)} fullscreen />
      <Drawer
        onClose={onCloseTimeline}
        visible={visible}
        placement={"right"}
        title={intl.formatMessage(messages.page.schedule.timeline.drawerTitle)}
        width={640}>
        <SessionTimeline sessions={sessions} />
      </Drawer>
    </Space>
  );
};
export default memo(SchedulePage);
