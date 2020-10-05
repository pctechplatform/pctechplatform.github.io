import React from 'react';

import Container from '~/components/Container';
import Metatags from '~/components/Metatags';
import PageTitle from '~/components/PageTitle';

export default function NotFoundPage(): React.ReactElement {
  return (
    <Container>
      <Metatags title="Sobre mim" />
      <PageTitle>Sobre mim</PageTitle>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  );
}
