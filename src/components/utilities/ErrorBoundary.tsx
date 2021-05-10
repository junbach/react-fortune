import { notification } from "antd";
import React, { Component, ErrorInfo, PropsWithChildren } from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";
import { messages } from "utils/locale";

interface ErrorBoundaryState {
  hasError: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sendCrashedErr = (err: Error, info: ErrorInfo): void => {
  // TODO: need implement
};

class ErrorBoundary extends Component<PropsWithChildren<WrappedComponentProps>, ErrorBoundaryState> {
  constructor(props: PropsWithChildren<WrappedComponentProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    const { intl } = this.props;
    notification.error({ message: intl.formatMessage(messages.error.notProcess), description: error.message });
    sendCrashedErr(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Loading failed! Please try again</p>;
    }

    return this.props.children;
  }
}

export default injectIntl(ErrorBoundary);
