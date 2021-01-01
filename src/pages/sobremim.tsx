import React from 'react';
import styled from 'styled-components';

import Container from '~/components/Container';
import Metatags from '~/components/Metatags';
import PageTitle from '~/components/PageTitle';

const Imagem = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export default function NotFoundPage(): React.ReactElement {
  return (
    <Container>
      <Metatags title="Sobre mim" />
      <PageTitle>Sobre mim</PageTitle>
      <p>
        <Imagem src="/01.jpg" />
      </p>
      <p>
        <p>
          Hey, meu nome é Patrick César se você chegou até aqui é porque você, assim como eu, é um fã de tecnologia.
        </p>
        <p> Tenho 28 anos e o que mais fiz até agora foi tentar encontrar o caminho para algo que me faça feliz.</p>
        Sou formado em Administração, professor particular de Inglês, Analista de HelpDesk e estudante de programação.
        <p>Sou baiano, com coração europeu (rs amo frio). Sou um cinéfilo, leitor, e até fitness.</p>Você vai descobrir
        mais sobre esse ser através dos meus posts no blog! Abraçossss.
      </p>
    </Container>
  );
}
