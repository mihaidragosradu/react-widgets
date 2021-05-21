import React from 'react';
import Link from './Link';
import '../App.css';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item itemHeader">
        Accordion
      </Link>
      <Link href="/list" className="item itemHeader">
        Search
      </Link>
      <Link href="/dropdown" className="item itemHeader">
        Dropdown
      </Link>
      <Link href="/translate" className="item itemHeader">
        Translate
      </Link>
    </div>
  );
};

export default Header;
