import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  &.active {
    color: white;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink  to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};
