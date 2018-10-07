import * as React from 'react';
import cn from 'classnames';

import Link from 'common/Link';
import PureBaseComponent from 'common/PureBaseComponent';
import Spinner from 'common/Spinner';

import './Button.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  theme?: 'default' | 'primary' | 'secondary' | 'link' | 'unstyled';
  fab?: boolean;
  to?: string;
  href?: string;
  nativeRef?(el: HTMLElement): void;
  onClick?(e: React.MouseEvent): void;
}

export default class Button extends PureBaseComponent<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> {
  render() {
    const {
      children,
      className,
      disabled = false,
      loading = false,
      theme = 'default',
      fab = false,
      to,
      href,
      nativeRef,
      onClick,
      ...rest
    } = this.props;

    const classNames = cn(
      className,
      'Button', {
        [`Button--${theme}`]: theme,
        'Button--disabled': disabled,
        'Button--fab': fab,
      },
    );

    if (to || href) {
      return (
        <Link
          className={ classNames }
          to={ to }
          href={ href }
          disabled={ disabled }
        >
          { children }
        </Link>
      );
    }

    return (
      <button
        className={ classNames }
        disabled={ disabled }
        onClick={ onClick }
        ref={ nativeRef }
        { ...rest }
      >
        { children }
        { loading &&
          <Spinner className="Button__loader" color={ disabled ? '#1200FF' : '#FFF' } />
        }
      </button>
    );
  }
}
