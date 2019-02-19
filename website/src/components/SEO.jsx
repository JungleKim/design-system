import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

function SEO({ lang = 'ko', meta = [], keywords = [], title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title || data.site.siteMetadata.title}
            titleTemplate={title && `%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                property: `og:title`,
                content: title || data.site.siteMetadata.title,
              },
              {
                property: `og:type`,
                content: `website`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : [],
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default SEO;
