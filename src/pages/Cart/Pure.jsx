import React from 'react';
import MfeLoader from 'components/common/MfeLoader';
import { mfeCart as mfe } from 'mfes';

// FIXME: error boundary
export default () => {
  return (
    <MfeLoader
      loaderOptions={{
        url: mfe.url,
        name: mfe.name,
      }}
    />
  );
};
