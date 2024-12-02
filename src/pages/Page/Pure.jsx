import React from "react";
import ErrorBoundary from "components/commons/ErrorBoundary";
import MfeLoader from "components/commons/MfeLoader";
import { mfeStarter, mfeStarter2 } from "mfes";

// FIXME: error boundary
export default () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <MfeLoader
            loaderOptions={{
              url: mfeStarter.url,
              name: mfeStarter.name,
            }}
          />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};
