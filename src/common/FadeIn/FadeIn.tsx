import * as React from 'react';
import { Transition, SpringRendererFunc } from 'react-spring';

import PureBaseComponent from 'common/PureBaseComponent';

interface Props {
  children: SpringRendererFunc<React.CSSProperties> | SpringRendererFunc<React.CSSProperties>[];
  keys?: string[] | number[];
  duration: number;
  active?: boolean;
}

export default class FadeIn extends PureBaseComponent<Props> {
  render() {
    const {
      children,
      keys,
      duration,
      active,
    } = this.props;

    return (
      <Transition
        keys={ keys }
        from={ { opacity: 0 } }
        enter={ { opacity: 1 } }
        leave={ { opacity: 0 } }
        config={ { duration } }
        { ...(typeof active === 'boolean' ? { update: { opacity: active ? 1 : 0 } } : {}) }
      >
        { children }
      </Transition>
    );
  }
}
