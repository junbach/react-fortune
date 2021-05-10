import { Col, Row } from "antd";
import React, { FunctionComponent, memo, useEffect, useState } from "react";
import { getSessionsByCourse, SessionData } from "utils/data/course-session";

import Calendar from "./Calendar";
import styles from "./schedule.module.less";
import SessionTimeline from "./SessionTimeline";

const courseID = "REACT001";
const SchedulePage: FunctionComponent = () => {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  useEffect(() => {
    getSessionsByCourse(courseID).then(arr => setSessions(arr));
  }, []);
  return (
    <Row gutter={16} justify={"center"} align={"top"} className={styles.pageLayout}>
      <Col md={24} lg={8}>
        <SessionTimeline sessions={sessions} />
      </Col>
      <Col md={24} lg={16}>
        <Calendar sessions={sessions} />
      </Col>
    </Row>
  );
};
export default memo(SchedulePage);
