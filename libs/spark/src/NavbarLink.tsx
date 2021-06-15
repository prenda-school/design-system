import {
  colorsPrendaLightGrey,
  colorsPrendaNavy,
  colorsTextIconOnLightLowContrast,
} from './theme';
import styled from 'styled-components';

export const NavbarLink = styled.a`
  height: 48px;
  border-radius: 8px;
  padding: 8px;
  margin-left: 8px;
  color: ${colorsTextIconOnLightLowContrast};
  text-decoration: none;
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  &:hover,
  &:focus,
  &[aria-current='page'] {
    background-color: ${colorsPrendaLightGrey};
  }
  &:active,
  &[aria-current='page'] {
    color: ${colorsPrendaNavy};
  }
  &:focus {
    border: 2px solid ${colorsPrendaNavy};
    outline: none;
  }
  &.disabled {
    opacity: 0.56;
    pointer-events: none;
    cursor: default;
  }
`;
