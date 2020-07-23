import React from 'react';
import styled from 'styled-components';
import image from '../../../assets/logo.svg';

const StyledSVG = styled.img`
  max-width: 200px;
  margin: 60px 20px 0px 20px;
`;

export default () => <StyledSVG className="logo" src={image} alt="logo" />;
