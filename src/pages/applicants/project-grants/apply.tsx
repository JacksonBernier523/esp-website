import { Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { PageSubheading, PageText } from '../../../components/UI';

const ProjectGrantsApply: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ethereum Ecosystem Program | Project Grants Application</title>
        <meta name='description' content='Project Grants Application' />
      </Head>

      <Stack mb={4}>
        <section id='description'>
          <PageSubheading mb={8}>Apply to Project grants</PageSubheading>

          <PageText>
            {/* TODO: this description text is not defined yet */}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </PageText>
        </section>
      </Stack>
    </>
  );
};

export default ProjectGrantsApply;
