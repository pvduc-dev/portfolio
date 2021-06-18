import * as React from 'react';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Header = ({ siteTitle }) => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <AnchorLink
              gatsbyLinkProps={{activeClassName: 'active'}}
              className="text-indigo-500"
              to='/#about'
            >
              About
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
