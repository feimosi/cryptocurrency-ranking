import * as React from 'react';
import cn from 'classnames';

import PureBaseComponent from 'common/PureBaseComponent';

interface Props {
  className?: string;
}

export default class Img extends PureBaseComponent<Props & React.ImgHTMLAttributes<HTMLImageElement>> {
  render() {
    const { className, ...rest } = this.props;
    const classNames = cn('Img', className);

    return (
      <img
        alt=""
        className={ classNames }
        { ...rest }
      />
    );
  }
}
