import PropTypes from 'prop-types';
import { useState } from 'react';

import { Switch } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { XGrid, useApiRef } from '@material-ui/x-grid';

import ModalConfirm from '../../util/ModalConfirm';
import HandleCustomer from 'src/components/pages/customers/HandleCustomer';

import { editCustomer } from 'src/api/api';

const getGender = (t, genderEnum) => {
  switch (genderEnum) {
    case 1:
      return t('gender.male');
    case 2:
      return t('gender.female');
    default:
      return t('gender.other');
  }
};

const useStyles = makeStyles((theme) => ({
  editIcon: {
    margin: 'auto',
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    },
  },
  table: {
    height: 630,
    width: '100%',
    '& .MuiDataGrid-mainGridContainer > div:nth-of-type(1)': {
      display: 'none',
    },
  },
}));

const CustomersTable = ({ t, customers, loading, setLoading }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [customerData, setCustomerData] = useState(null);
  const [showEditCustomer, setShowEditCustomer] = useState(false);
  const [error, setError] = useState(false);

  const apiRef = useApiRef();

  const handleEditModal = (row) => {
    setCustomerData(row);
    setShowEditCustomer((curr) => !curr);
  };

  const handleModal = (row) => {
    setCustomerData(row);
    setShowModal((curr) => !curr);
  };

  const handleActive = () => {
    setLoading(true);
    const body = { ...customerData, active: !customerData.active };
    editCustomer(body)
      .then((res) => {
        const { data } = res;
        updateCustomers(data.customer);
        handleModal(null);
      })
      .catch(() => setError(true))
      .then(() => {
        setLoading(false);
      });
  };

  const handleEditCustomer = (body) => {
    setLoading(true);
    editCustomer(body)
      .then((res) => {
        const { data } = res;
        updateCustomers(data.customer);
        handleEditModal(null);
      })
      .catch(() => setError(true))
      .then(() => {
        setLoading(false);
      });
  };

  const updateCustomers = (customer) => {
    const newCustomers = [];

    for (var i in apiRef.current.state.rows.idRowsLookup) newCustomers.push(apiRef.current.state.rows.idRowsLookup[i]);

    const customerIndex = newCustomers.findIndex((customer) => customer.id == customerData.id);
    newCustomers[customerIndex] = customer;
    apiRef.current.updateRows(newCustomers);
  };

  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'firstName', headerName: t('customers:table.firstName'), width: 160 },
    { field: 'lastName', headerName: t('customers:table.lastName'), width: 160 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phoneNumber', headerName: t('customers:table.phoneNumber'), width: 130 },
    { field: 'address', headerName: t('customers:table.address'), width: 250 },
    {
      field: 'gender',
      headerName: t('gender.gender'),
      valueGetter: (params) => getGender(t, params.row.gender),
    },
    {
      field: 'birthDate',
      headerName: t('customers:table.birthDate'),
      width: 130,
      renderCell: (params) => {
        const date = new Date(params.row.birthDate);
        return date.toLocaleDateString();
      },
    },
    {
      field: 'edit',
      headerName: t('edit'),
      renderCell: (params) => {
        return <Edit onClick={() => handleEditModal(params.row)} className={classes.editIcon} />;
      },
    },
    {
      field: 'active',
      headerName: t('customers:table.active'),
      renderCell: (params) => {
        return (
          <Switch
            checked={params.row.active}
            onChange={() => handleModal(params.row)}
            color="secondary"
            name="checkedB"
          />
        );
      },
    },
  ];

  return (
    <>
      {showEditCustomer && (
        <HandleCustomer
          t={t}
          loading={loading}
          error={error}
          handleCustomerSubmit={handleEditCustomer}
          handleModal={() => handleEditModal(null)}
          customerData={customerData}
        />
      )}
      <div className={classes.table}>
        <XGrid
          rows={customers}
          columns={columns}
          pageSize={10}
          loading={loading}
          apiRef={apiRef}
          disableSelectionOnClick
          // onPageChange={(pageChange) => console.log(pageChange)}
          pagination
        />
        {showModal && (
          <ModalConfirm
            t={t}
            handleModal={handleModal}
            handleAction={handleActive}
            title="customers:disable.title"
            description="customers:disable.description"
          />
        )}
      </div>
    </>
  );
};

CustomersTable.propTypes = {
  t: PropTypes.func.isRequired,
  customers: PropTypes.array,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default CustomersTable;
