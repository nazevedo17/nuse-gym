import { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Box } from '@material-ui/core';

import PageTitle from 'src/components/util/PageTitle';
import Layout from 'src/components/layout';
import ClientTable from 'src/components/pages/clients/ClientTable';
import AddClient from 'src/components/pages/clients/AddClient';
import FindClient from 'src/components/pages/clients/FindClient';

import { END } from 'redux-saga';

import { wrapper } from '../../redux/store';
import { getCostumers } from '../../redux/actions';

const Clients = ({ t, costumers }) => {
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
            <ClientTable t={t} costumers={costumers} />
            {showAddClient && <AddClient t={t} handleModal={handleClientModal} />}
            {showFindClient && <FindClient t={t} handleModal={handleFindClientModal} />}
          </Box>
        </section>
      </Layout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const token = context.req.cookies.token;
  let costumers = null;
  if (token) {
    context.store.dispatch(getCostumers({ filterName: '', token }));
    context.store.dispatch(END);

    await context.store.sagaTask.toPromise();

    costumers = context.store.getState().costumers;
  }

  return { props: { namespacesRequired: ['common', 'clients'], costumers } };
});

Clients.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Clients);
