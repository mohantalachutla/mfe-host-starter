import React from "react";
import _ from "lodash";
import { registry, webpack } from "@mohantalachutla/mfe-utils";
import ErrorBoundary from "components/commons/ErrorBoundary";
import mfeConfigs from "mfes";

// move this out and iterated
registry.dispatch("mfe-starter-event1", (data) => {
  console.log("Aknowledged mfe-starter-event1", data);
});

// impletement cache here

const MfePage = React.lazy(() =>
  webpack.loadMfe(
    mfeConfigs["mfeStarter"].url,
    mfeConfigs["mfeStarter"].name,
    mfeConfigs["mfeStarter"].modules[0]
  )
);

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
