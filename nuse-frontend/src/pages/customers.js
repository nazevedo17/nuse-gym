import { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Box } from '@material-ui/core';

import PageTitle from 'src/components/util/PageTitle';
import Layout from 'src/components/layout';
import CustomersTable from 'src/components/pages/customers/CustomersTable';
import AddCustomer from 'src/components/pages/customers/AddCustomer';
import FindCustomer from 'src/components/pages/customers/FindCustomer';

import Router from 'next/router';
import Cookies from 'js-cookie';

import { getCustomers } from 'src/api/api';

const Customers = ({ t, customers }) => {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [showFindCustomer, setShowFindCustomer] = useState(false);
  const [allCustomers, setAllCustomers] = useState(customers);
  const [loading, setLoading] = useState(false);

  const handleCustomerModal = () => {
    setShowAddCustomer((curr) => !curr);
  };

  const handleFindCustomerModal = () => {
    setShowFindCustomer((curr) => !curr);
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
      <PageTitle title={t('pages.customers')} />
      <Layout t={t} handleAdd={handleCustomerModal} handleFind={handleFindCustomerModal} handleRefresh={handleRefresh}>
        <section>
          <Box component="article" p={2}>
            <CustomersTable t={t} customers={allCustomers} loading={loading} setLoading={setLoading} />
            {showAddCustomer && (
              <AddCustomer t={t} handleModal={handleCustomerModal} setAllCustomers={setAllCustomers} />
            )}
            {showFindCustomer && (
              <FindCustomer t={t} handleModal={handleFindCustomerModal} setAllCustomers={setAllCustomers} />
            )}
          </Box>
        </section>
      </Layout>
    </>
  );
};

Customers.getInitialProps = async (context) => {
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

  return { namespacesRequired: ['common', 'customers'], customers };
};

Customers.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Customers);
