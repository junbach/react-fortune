import Icon from "@ant-design/icons";
import { ReactComponent as ReactIcon } from "assets/react-love.svg";
import React, { CSSProperties, FunctionComponent, memo } from "react";

const ReactLoveIcon: FunctionComponent<{ style?: CSSProperties; className?: string }> = props => (
  <Icon {...props} component={ReactIcon} />
);
export default memo(ReactLoveIcon);
