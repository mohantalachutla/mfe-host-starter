import React from "react";
import _ from "lodash";

import ErrorBoundary from "components/commons/ErrorBoundary";
import mfeConfigs from "mfes";

// validating mfe name
// module federation does not allow specail characters in the name
const validateMfeName = (mfeName) => {
  if (_.isEmpty(mfeName)) {
    throw new Error(`InvalidMfeName: mfe name should not be empty`);
  }
  const reg = new RegExp("[^a-zA-Z0-9_]", "g");
  if (reg.test(mfeName)) {
    throw new Error(
      `InvalidMfeName: mfe name ${mfeName} should not contain special characters`
    );
  }
};

const loadMfeManually = async (url, mfe, moduleName) => {
  if (!url) {
    throw new Error(`InvalidUrl: mfe remote url should not be empty`);
  }
  if (!module) {
    throw new Error(`InvalidMfeName: mfe name should not be empty`);
  }
  validateMfeName(mfe);

  //Container creation
  //Loading the remote url
  await new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${url}/remoteEntry.js`;
    // script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  // const init = await __webpack_init_sharing__("default");
  console.debug({
    // init,
    __webpack_init_sharing__,
    __webpack_share_scopes__,
    __webpack_require__,
  });
  const container = window[mfe]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[mfe].get(moduleName);
  const Module = factory();
  console.debug({ Module });
  return Module;
};

const importMfe = (module) => {
  function lazyWithTimeout(load, timeout = 5000) {
    return React.lazy(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(
            () => reject(new Error("Timeout: Component loading failed")),
            timeout
          );
          load().then(resolve);
        })
    );
  }
  const load = async () => {
    console.debug(`Importing ${module}...`);
    let Module;
    try {
      Module = await import(/* webpackIgnore: true */ module);
      console.debug(`${module} Imported successfully`);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error(error);
      }
    }
    return Module?.default || Module;
  };
  return lazyWithTimeout(load);
};
// const MfePage = () => importMfe("mfe_starter/Page");
const MfePage = React.lazy(() =>
  loadMfeManually(
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
          <MfePage />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};
