import * as React from 'react';
import * as ReactLoadable from 'react-loadable';

import PageLoadingBar from 'common/PageLoadingBar';
import './Loadable.css';

export default function Loadable(props:
  Omit<ReactLoadable.OptionsWithoutRender<{}>, 'loading'>,
) {
  return (
    ReactLoadable({
      loading: () => <div><PageLoadingBar /></div>,
      delay: 300,
      ...props,
    })
  );
}
