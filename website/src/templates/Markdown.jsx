/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

export default function Markdown({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
