import { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Box } from '@material-ui/core';

import PageTitle from 'src/components/util/PageTitle';
import Layout from 'src/components/layout';
import ClientTable from 'src/components/pages/clients/ClientTable';
import AddClient from 'src/components/pages/clients/AddClient';
import FindClient from 'src/components/pages/clients/FindClient';

// import A from 'components/util/A';
// import Img from 'components/util/Img';

import { useSelector } from 'react-redux';

const Clients = ({ t }) => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [showAddClient, setShowAddClient] = useState(false);
  const [showFindClient, setShowFindClient] = useState(false);

  const handleClientModal = () => {
    setShowAddClient((curr) => !curr);
  };

  const handleFindClientModal = () => {
    setShowFindClient((curr) => !curr);
  };

  return (
    <>
      <PageTitle title={t('pages.clients')} />
      <Layout t={t} handleAdd={handleClientModal} handleFind={handleFindClientModal}>
        <section>
          <Box component="article" p={2}>
            <ClientTable t={t} />
            {showAddClient && <AddClient t={t} handleModal={handleClientModal} />}
            {showFindClient && <FindClient t={t} handleModal={handleFindClientModal} />}
          </Box>
        </section>
      </Layout>
    </>
  );
};

// This gets called on every request
// export async function getServerSideProps() {
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   return { props: { data } };
// }

//This function gets called at build time
// export async function getStaticProps() {
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   console.log(process.env.TEST);

//   return { props: {} };
// }

Clients.getInitialProps = async () => ({
  namespacesRequired: ['common', 'clients'],
});

Clients.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Clients);
