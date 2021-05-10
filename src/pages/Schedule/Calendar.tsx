import "antd/es/calendar/style";

import { ClockCircleOutlined, TeamOutlined } from "@ant-design/icons";
import { Badge, Button, Popover, Tag, Typography } from "antd";
import generateCalendar from "antd/es/calendar/generateCalendar";
import dayjs, { Dayjs } from "dayjs";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import React, { FunctionComponent, memo } from "react";
import { FormattedMessage } from "react-intl";
import { SessionData } from "utils/data/course-session";
import { messages } from "utils/locale";

import styles from "./schedule.module.less";

const { Paragraph } = Typography;
const formatDate = "HH:mm";
const CalendarPanel = generateCalendar<Dayjs>(dayjsGenerateConfig);
const PopoverContent: FunctionComponent<{ data: SessionData }> = ({ data }) => {
  return (
    <div>
      <Paragraph>{data.desc}</Paragraph>
      {data.scopes &&
        data.scopes.map(sc => (
          <Tag color="magenta" key={sc} className={styles.scopeTag}>
            {sc}
          </Tag>
        ))}
      <Button
        block
        className={styles.popoverUrlBtn}
        icon={<TeamOutlined />}
        disabled={!data.url}
        href={data.url}
        target={"_blank"}>
        <FormattedMessage {...messages.page.schedule.calendar.urlBtn} />
      </Button>
    </div>
  );
};
const dateCellRenderFn = (sessions: SessionData[]) => (date: Dayjs) => {
  const data = sessions.find(ss => ss.date && dayjs(ss.date).isSame(date, "day"));
  if (data) {
    const title = (
      <div>
        {data.date && (
          <Tag className={styles.scopeTag} color={"green"}>
            <ClockCircleOutlined /> {dayjs(data.date).format(formatDate)}
          </Tag>
        )}
        {data.title}
      </div>
    );
    return (
      <Popover title={title} content={<PopoverContent data={data} />}>
        <Badge status={"processing"} text={data.title} />
      </Popover>
    );
  }
  return undefined;
};

const CalendarComponent: FunctionComponent<{ sessions: SessionData[] }> = ({ sessions }) => {
  return <CalendarPanel dateCellRender={dateCellRenderFn(sessions)} />;
};

export default memo(CalendarComponent);
