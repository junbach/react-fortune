import { CheckCircleOutlined, ClockCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
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
  const current = new Date();
  sessions.sort(sessionSortFn);
  const closet: SessionData | null = sessions.filter(ss => ss.date && ss.date > current)[0];
  return (
    <Timeline pending={intl.formatMessage(messages.page.schedule.timeline.beingUpdated)}>
      {sessions.map(ss => {
        let color = "gray";
        let marked = false;
        let dotIcon = undefined;
        if (ss.date) {
          color = ss.date < current ? "green" : "orange";
          dotIcon = ss.date < current && <CheckCircleOutlined />;
          marked = true;
        }
        if (ss.id === closet?.id) {
          color = "blue";
          dotIcon = <RightCircleOutlined style={{ fontSize: 24 }} />;
        }
        return (
          <Timeline.Item key={ss.id} color={color} className={styles.timeline} dot={dotIcon}>
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
