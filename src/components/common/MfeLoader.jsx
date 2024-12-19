import React, { useEffect, useMemo } from 'react';
import { webpack } from '@mohantalachutla/mfe-utils';

import ErrorBoundary from 'components/common/ErrorBoundary';
import { useHistory } from 'react-router-dom';

const MfeLoader = ({
  loaderOptions: { url, name, moduleName, defaultComponent, enableCache },
  ...props
}) => {
  // const cache = useSelector((state) => state.cache?.cache);
  // const dispatch = useDispatch();
  // const loadMfe = webpack
  //   .createMfeLoader
  //   cache,
  //   ((updated) => {
  //     updated && dispatch(setCache({ cache: updated }));
  //   },
  //   () => {}
  //   );
  const history = useHistory();
  useEffect(() => {
    window.browserHistory = history;
    return () => {
      window.browserHistory = null;
    };
  }, []);
  const MfePage = useMemo(
    () =>
      React.lazy(() =>
        webpack.loadMfe({
          url,
          name,
          moduleName,
          defaultComponent,
          enableCache,
        })
      ),
    [url, name, moduleName, enableCache, webpack.loadMfe]
  );

  return (
    <div
      className="mfe-loader"
      id={'mfe-loader-' + name + moduleName}
      key={'mfe-loader-' + name + moduleName}
    >
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <MfePage {...props} />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default MfeLoader;
