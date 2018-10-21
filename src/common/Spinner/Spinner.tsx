import * as React from 'react';
import cn from 'classnames';

import PureBaseComponent from 'common/PureBaseComponent';
import './Spinner.css';

interface Props {
  className?: string;
  color?: string;
  size?: number;
}

export default class Spinner extends PureBaseComponent<Props> {
  render() {
    const {
      className,
      color = '#ffffff',
      size = 16,
    } = this.props;

    const classNames = cn(className, 'Spinner');
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      borderTopWidth: `${size / 8}px`,
      borderRightWidth: `${size / 8}px`,
      borderBottomWidth: `${size / 8}px`,
      borderLeftWidth: `${size / 8}px`,
      borderLeftColor: color,
    };

    return (
      <span className={ classNames } style={ style } />
    );
  }
}
