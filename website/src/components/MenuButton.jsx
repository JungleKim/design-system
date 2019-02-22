import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

const styles = {
  default: css`
    position: relative;
    display: inline-block;
    width: 64px;
    height: 64px;
    padding: 0;

    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    cursor: pointer;
    touch-action: manipulation;

    & > *,
    &::before,
    &::after {
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: 50%;
      left: 20px;
      height: 0;
      border: 1px solid currentColor;
      border-radius: 1px;
    }

    & > * {
      width: 24px;
      font-size: 0;
      transition: width 0.2s, opacity 0.2s;
    }

    &::before,
    &::after {
      content: '';
      width: 18px;
      transition: transform 0.2s;
    }

    &::before {
      transform: translateY(-7px);
    }

    &::after {
      transform: translateY(7px);
    }
  `,
  pressed: css`
    &::before {
      transform: rotateZ(45deg) scaleX(1.414);
    }

    &::after {
      transform: rotateZ(-45deg) scaleX(1.414);
    }

    & > * {
      width: 0;
      opacity: 0;
    }
  `,
};

const MenuButton = ({ css: externalStyles, isPressed, ...restProps }) => (
  <button
    type="button"
    css={[styles.default, isPressed && styles.pressed, externalStyles]}
    {...restProps}
  >
    <span>Toggle Menu</span>
  </button>
);

MenuButton.propTypes = {
  css: PropTypes.object,
  isPressed: PropTypes.bool,
};

export default MenuButton;
