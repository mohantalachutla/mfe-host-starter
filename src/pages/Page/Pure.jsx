import React from 'react';
import MfeLoader from 'components/common/MfeLoader';
import { mfeStarter } from 'mfes';

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
