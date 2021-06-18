import * as React from 'react';
import { FC } from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links"

const NAV_LINKS = [
  {
    title: 'About',
    to: '/#about'
  },
  {
    title: 'Portfolio',
    to: '/#portfolio'
  },
  {
    title: 'Blog',
    to: '/#blog'
  },
  {
    title: 'Contact',
    to: '/#contact'
  },
]

const Header: FC = () => (
  <header
    className="fixed w-full h-[90px] flex items-center"
  >
    <nav
      className="ml-[42rem]"
    >
      <ul
        className="flex font-semibold"
      >
        {NAV_LINKS.map((link) => (
          <li
            key={link.to}
            className="px-4 mx-2"
          >
            <AnchorLink
              to={link.to}
              title={link.title}
            />
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
