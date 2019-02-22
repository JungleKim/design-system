import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ImageText = ({
  css: externalStyles,
  width,
  height,
  src,
  ...restProps
}) => (
  <span
    css={[
      css`
        display: inline-block;
        width: ${width}px;
        height: 0;
        padding-top: ${height}px;

        background-image: url('${src}');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        overflow: hidden;
      `,
      externalStyles,
    ]}
    {...restProps}
  />
);

ImageText.propTypes = {
  css: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
};

export default ImageText;
