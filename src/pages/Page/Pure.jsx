import React from "react";
import _ from "lodash";
import { webpack } from "@mohantalachutla/mfe-utils";
import ErrorBoundary from "components/commons/ErrorBoundary";
import { mfeStarter } from "mfes";

// TODO: implement cache here

const MfePage = React.lazy(() =>
  webpack.loadMfe(mfeStarter.url, mfeStarter.name)
);
// FIXME: error boundary
export default () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <MfePage message="Welcome from host app" />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};
