import { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Box } from '@material-ui/core';

import PageTitle from 'src/components/util/PageTitle';
import Layout from 'src/components/layout';
import ClientTable from 'src/components/pages/clients/ClientTable';
import AddClient from 'src/components/pages/clients/AddClient';
import FindClient from 'src/components/pages/clients/FindClient';

import Router from 'next/router';
import Cookies from 'js-cookie';

import { getCustomers } from 'src/api/api';

const Clients = ({ t, customers }) => {
  const [showAddClient, setShowAddClient] = useState(false);
  const [showFindClient, setShowFindClient] = useState(false);
  const [allCustomers, setAllCustomers] = useState(customers);
  const [loading, setLoading] = useState(false);

  const handleClientModal = () => {
    setShowAddClient((curr) => !curr);
  };

  const handleFindClientModal = () => {
    setShowFindClient((curr) => !curr);
  };

  const handleRefresh = () => {
    const body = { filterName: '' };
    setLoading(true);
    getCustomers(body)
      .then((res) => {
        const { data } = res;
        setAllCustomers(data.customers);
      })
      .catch(() => {})
      .then(() => setLoading(false));
  };

  return (
    <>
      <PageTitle title={t('pages.clients')} />
      <Layout t={t} handleAdd={handleClientModal} handleFind={handleFindClientModal} handleRefresh={handleRefresh}>
        <section>
          <Box component="article" p={2}>
            <ClientTable t={t} customers={allCustomers} loading={loading} setLoading={setLoading} />
            {showAddClient && <AddClient t={t} handleModal={handleClientModal} />}
            {showFindClient && (
              <FindClient t={t} handleModal={handleFindClientModal} setAllCustomers={setAllCustomers} />
            )}
          </Box>
        </section>
      </Layout>
    </>
  );
};

Clients.getInitialProps = async (context) => {
  const token = context.req ? context.req.cookies.token : Cookies.get('token');
  let customers = [];

  if (token) {
    const body = { filterName: '' };
    const response = await getCustomers(body, token);
    customers = response.data.customers;
  } else {
    if (context.res) {
      context.res.writeHead(301, { Location: 'login' });
      context.res.end();
      return {};
    }
    Router.push('/login');
    return {};
  }

  return { namespacesRequired: ['common', 'clients'], customers };
};
Clients.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Clients);
