import React, { FunctionComponent } from "react";
import { Provider as ReduxStore } from "react-redux";
import { store } from "store";

import AppLayout from "./AppLayout";
import { AppProvider } from "./AppProvider";

export const App: FunctionComponent = () => (
  <ReduxStore store={store}>
    <AppProvider>
      <AppLayout />
    </AppProvider>
  </ReduxStore>
);
