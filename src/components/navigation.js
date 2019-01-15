import React from 'react';
import { Link } from 'gatsby'

export default function Navigation() {
  return (
    <nav className="flex mt-6 md:mt-10 mb-4">
      <Anchor url="/" label="Home" />
      <Anchor url="/about" label="About" />
      {/* <Anchor url="#portfolio" label="Portfolio" /> */}
      <Anchor url="#blog" label="Blog" />
    </nav>
  );
}

function Anchor({ active, url, label }) {
  const css = 'text-base text-black no-underline mr-8 hover:text-green';

  return (
    <Link to={url} className={css} activeClassName="text-green font-semibold" style={{ transition: 'color 0.3s' }}>{label}</Link>
  );
}
