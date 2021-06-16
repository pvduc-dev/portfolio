import * as React from 'react';
import PropTypes from 'prop-types';
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="#about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
