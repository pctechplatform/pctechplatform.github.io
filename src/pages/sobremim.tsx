import React from 'react';

import Container from '~/components/Container';
import Metatags from '~/components/Metatags';
import PageTitle from '~/components/PageTitle';

export default function NotFoundPage(): React.ReactElement {
  return (
    <Container>
      <Metatags title="Sobre mim" />
      <PageTitle>Sobre mim</PageTitle>
      <p>
        ### Hey, I’m Patrick César - I’m currently working on IT Support. - I’m currently learning JavaScript. - How to
        reach me: @ptrickcesar - Pronouns: His/Him. - Fun fact: I’m 28. but I look like 18.
      </p>
    </Container>
  );
}
