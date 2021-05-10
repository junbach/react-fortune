import Icon from "@ant-design/icons";
import { ReactComponent as USFlag } from "assets/flag/us.svg";
import { ReactComponent as VNFlag } from "assets/flag/vn.svg";
import React, { CSSProperties, FunctionComponent, memo } from "react";
import { CountryCode } from "utils/locale/entries/interface";

interface CountryFlagProps {
  code: CountryCode;
  className?: string;
  style?: CSSProperties;
}

const CountryFlag: FunctionComponent<CountryFlagProps> = ({ code, ...props }) => {
  let flag = USFlag;
  if (code === CountryCode.VN) {
    flag = VNFlag;
  }
  return <Icon {...props} component={flag} />;
};

export default memo(CountryFlag);
