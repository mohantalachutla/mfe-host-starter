import React from 'react';
import MfeLoader from 'components/common/MfeLoader';
import { mfeProduct } from 'mfes';

// FIXME: error boundary
export default () => {
  return (
    <MfeLoader
      loaderOptions={{
        url: mfeProduct.url,
        name: mfeProduct.name,
      }}
    />
  );
};
