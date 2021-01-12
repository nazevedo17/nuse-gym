import { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Box } from '@material-ui/core';

import PageTitle from 'src/components/util/PageTitle';
import Layout from 'src/components/layout';
import ClientTable from 'src/components/pages/clients/ClientTable';
import AddClient from 'src/components/pages/clients/AddClient';
import FindClient from 'src/components/pages/clients/FindClient';

import axios from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';

const Clients = ({ t, customers }) => {
  const [showAddClient, setShowAddClient] = useState(false);
  const [showFindClient, setShowFindClient] = useState(false);
  const [allCustomers, setAllCustomers] = useState(customers);

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
            <ClientTable t={t} customers={allCustomers} />
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
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/customers/`, {
      data: { filterName: '' },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
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
