import { ClockCircleOutlined } from "@ant-design/icons";
import { Tag, Timeline, Typography } from "antd";
import dayjs from "dayjs";
import React, { FunctionComponent, memo } from "react";
import { useIntl } from "react-intl";
import { SessionData, sessionSortFn } from "utils/data/course-session";
import { messages } from "utils/locale";

import styles from "./schedule.module.less";

const { Title, Paragraph } = Typography;
const formatDate = "DD-MM-YYYY HH:mm";
const SessionTimelineComponent: FunctionComponent<{ sessions: SessionData[] }> = ({ sessions }) => {
  const intl = useIntl();
  return (
    <Timeline pending={intl.formatMessage(messages.page.schedule.timeline.beingUpdated)}>
      {sessions.sort(sessionSortFn).map(ss => {
        let color = "gray";
        let marked = false;
        if (ss.date) {
          color = "blue";
          marked = true;
        }
        return (
          <Timeline.Item key={ss.id} color={color} className={styles.timeline}>
            <Title level={5} mark={marked}>
              {ss.title}
            </Title>
            <Paragraph>{ss.desc}</Paragraph>
            <div>
              {ss.date && (
                <Tag className={styles.scopeTag} color={"green"}>
                  <ClockCircleOutlined /> {dayjs(ss.date).format(formatDate)}
                </Tag>
              )}
              {ss.scopes &&
                ss.scopes.map(sc => (
                  <Tag color="magenta" key={sc} className={styles.scopeTag}>
                    {sc}
                  </Tag>
                ))}
            </div>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
export default memo(SessionTimelineComponent);
