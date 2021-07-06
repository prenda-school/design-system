import styled from 'styled-components';
import { palette } from './styles/palette';

export const NavbarLink = styled.a`
  height: 48px;
  border-radius: 8px;
  padding: 8px;
  margin-left: 8px;
  color: ${palette.text.onLightLowContrast};
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
    background-color: ${palette.grey.light};
  }
  &:active,
  &[aria-current='page'] {
    color: ${palette.blue[5]};
  }
  &:focus {
    border: 2px solid ${palette.blue[5]};
    outline: none;
  }
  &.disabled {
    opacity: 0.56;
    pointer-events: none;
    cursor: default;
  }
`;
