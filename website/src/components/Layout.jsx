import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { css, Global } from '@emotion/core';
import Header from './Header';
import 'reset-css';

const headerHeight = 74;
const footerHeight = 200;

const globalStyles = css`
  html {
    position: relative;
    min-height: 100%;
  }

  body {
    box-sizing: border-box;
    min-height: 100%;
    padding-top: ${headerHeight}px;
    padding-bottom: ${footerHeight}px;
  }

  #___gatsby {
    min-height: 100%;
  }
`;

const headerStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight}px;
  z-index: 10;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Global styles={globalStyles} />
        <Header css={headerStyles} siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
