import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import colors from '@ridi/colors';
import ImageText from './ImageText';
import ridiDesignSystemImage from '../images/ridi-design-system.svg';
import betaImage from '../images/beta.png';

const Wrapper = styled.header`
  background: white;
  color: ${colors.slateGray100};
  border-bottom: 1px solid ${colors.slateGray10};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const TitleLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: inherit;
  font-weight: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;

const Header = ({ siteTitle = '', ...restProps }) => (
  <Wrapper {...restProps}>
    <Container css={{ height: '100%' }}>
      <Title css={{ height: '100%' }}>
        <TitleLink css={{ height: '100%' }} to="/">
          <ImageText
            width={166}
            height={18}
            src={ridiDesignSystemImage}
            css={{ marginRight: 10 }}
          >
            {siteTitle}
          </ImageText>
          <ImageText width={45} height={24} src={betaImage}>
            BETA
          </ImageText>
        </TitleLink>
      </Title>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
