import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.header`
  margin-bottom: 40px;
`;

const Name = styled.span<{ small: boolean }>`
  font-size: ${(props) => (props.small ? '6vw' : '15vw')};
  color: #fff;
  font-weight: 700;
  text-transform: lowercase;

  @media (min-width: 760px) {
    font-size: ${(props) => (props.small ? '24px' : '80px')};
  }
`;

const LastName = styled.span`
  color: #363636;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;

  :focus {
    border-bottom: 1px solid #363636;
    outline: none;
  }
`;

const Raio = styled.span`
  font-size: 25px;
`;

interface HeaderProps {
  small: boolean;
  author: string;
}

export default function Header(props: HeaderProps): React.ReactElement {
  const [name, lastname] = props.author.split(' ');

  return (
    <Container>
      <StyledLink to="/">
        <Name small={props.small}>
          {name}
          <Raio>⚡</Raio>
          {lastname && <LastName data-testid="header-lastname">{lastname}</LastName>}
        </Name>
      </StyledLink>
    </Container>
  );
}
