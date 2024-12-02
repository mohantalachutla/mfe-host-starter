import React from "react";
import MfeLoader from "components/commons/MfeLoader";
import { mfeStarter } from "mfes";

// FIXME: error boundary
export default () => {
  return (
    <MfeLoader
      loaderOptions={{
        url: mfeStarter.url,
        name: mfeStarter.name,
      }}
    />
  );
};
