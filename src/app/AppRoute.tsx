import ErrorBoundary from "components/utilities/ErrorBoundary";
import LoadingComponent from "components/utilities/LoadingComponent";
import React, { FunctionComponent, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { routePath } from "utils/config";

const HomePage = lazy(() => import("pages/Home"));
const ContactPage = lazy(() => import("pages/Contact"));
const SchedulePage = lazy(() => import("pages/Schedule"));
const DocumentPage = lazy(() => import("pages/Document"));
const RecordPage = lazy(() => import("pages/Record"));
const AppRoute: FunctionComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingComponent />}>
      <Switch>
        <Route exact path={routePath.HOME}>
          <HomePage />
        </Route>
        <Route path={routePath.SCHEDULE}>
          <SchedulePage />
        </Route>
        <Route path={routePath.SHARED_DOCUMENTS}>
          <DocumentPage />
        </Route>
        <Route path={routePath.RECORD}>
          <RecordPage />
        </Route>
        <Route path={routePath.CONTACT}>
          <ContactPage />
        </Route>
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default AppRoute;
