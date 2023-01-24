import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

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

export const AuthNav = () => {
  return (
    <Flex
      as="div"
      minWidth="max-content"
      justifyContent="flex-end"
      alignItems="center"
      gap="2"
    >
      <StyledLink  to="/register">
        Register
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </Flex>
  );
};
