import React from 'react';

import Container from '~/components/Container';
import Metatags from '~/components/Metatags';
import PageTitle from '~/components/PageTitle';

export default function NotFoundPage(): React.ReactElement {
  return (
    <Container>
      <Metatags title="Sobre mim" />
      <PageTitle>Sobre mim</PageTitle>
      <p>Hey, meu nome é Patrick César e, além de Analista Computacional, sou estudante de desenvolvimento web.</p>
      <img src="/static/01.jpg" />
    </Container>
  );
}
