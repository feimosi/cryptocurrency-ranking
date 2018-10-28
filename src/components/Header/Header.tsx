import * as React from 'react';

import Link from 'common/Link/Link';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        Cryptocurrency ranking
      </Link>
    </div>
  );
}
