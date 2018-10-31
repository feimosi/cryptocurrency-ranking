import * as React from 'react';

import Button from 'common/Button';
import Img from 'common/Img';
import Link from 'common/Link';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        Cryptocurrency ranking
      </Link>
      <Button className="Header__settingsButton" to="/settings">
        <Img src="/img/settings.svg" />
      </Button>
   </div>
  );
}
