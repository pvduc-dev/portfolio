import * as React from 'react';
import { FC, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const NAV_LINKS = [
  {
    title: 'Hello',
    to: '/#hello',
  },
  {
    title: 'About',
    to: '/#about-me',
  },
  {
    title: 'Skills',
    to: '/#skills',
  },
  {
    title: 'Contact',
    to: '/#contact',
  },
];

const Header: FC = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);

  function menuPressHandler() {
    setIsDrawer(true);
  }

  function drawerCloseHandler() {
    setIsDrawer(false);
    debugger;
  }

  return (
    <header className="w-full fixed top-0 z-30">
      <div className="h-[4.5rem] px-4 md:px-6 lg:px-8 flex">
        <div className="flex-none flex items-center">
          <Link to="/" aria-label="Home">
            <StaticImage
              src="../../images/logo.png"
              alt="Pv Duc logo"
              sizes="40"
              width={40}
            />
          </Link>
        </div>
        <nav className="ml-[42rem] hidden md:block">
          <ul className="h-full flex font-semibold">
            {NAV_LINKS.map(link => (
              <li
                key={link.to}
                className="px-4 mx-2 flex items-center text-accent"
              >
                <AnchorLink className={link.title} to={link.to} title={link.title} stripHash />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
