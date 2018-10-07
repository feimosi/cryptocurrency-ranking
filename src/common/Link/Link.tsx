import * as React from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';
import classnames from 'classnames';

import PureBaseComponent from 'common/PureBaseComponent';
import './Link.css';

interface CommonProps {
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

interface RouterProps extends CommonProps, ReactRouterLinkProps {}
interface AnchorProps extends CommonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

type Props = RouterProps | AnchorProps;

interface DefaultProps {
  disabled: boolean;
}

export default class Link extends PureBaseComponent<Props> {
  static defaultProps: DefaultProps = {
    disabled: false,
  };

  preventDefault = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  }

  render() {
    const { href, disabled, children, className } = this.props;
    const classNames = classnames(
      className,
      'Link', {
        'Link--disabled': disabled,
      },
    );

    if ('to' in this.props) {
      return (
        <ReactRouterLink
          { ...this.props }
          to={ this.props.to }
          className={ classNames }
          onClick={ disabled ? this.preventDefault : null }
        />
      );
    }

    return (
      <a
        { ...this.props }
        href={ disabled ? null : href }
        className={ classNames }
      >
        { children }
      </a>
    );
  }
}
