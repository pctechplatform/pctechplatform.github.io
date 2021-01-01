import React from 'react';

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
        Hey, meu nome é Patrick César se você chegou até aqui é porque você, assim como eu, é um fã de tecnologia. Tenho
        <p> 28 anos e o que mais fiz até agora foi tentar encontrar o caminho para algo que me faça feliz.</p>
        Sou formado em Administração, professor particular de Inglês, Analista de HelpDesk e estudante de programação.
        Sou baiano, com coração europeu (rs amo frio). Sou um cinéfilo, leitor, e até fitness. Você vai descobrir mais
        sobre esse ser através dos meus posts no blog! Abraçossss.
      </p>
      <Imagem src="/01.jpg" />
    </Container>
  );
}
