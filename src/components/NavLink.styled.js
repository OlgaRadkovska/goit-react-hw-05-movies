import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationBar = styled.nav`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  gap: 40px;
  box-shadow: 0px 1px 5px black;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: bold;
  font-size: 24px;

  &.active {
    color: tomato;
  }
`;
