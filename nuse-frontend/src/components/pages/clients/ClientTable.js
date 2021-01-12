import PropTypes from 'prop-types';
import { useState } from 'react';

import { Switch } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { XGrid, useApiRef } from '@material-ui/x-grid';

import ModalConfirm from './ModalConfirm';

import Cookies from 'js-cookie';
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

const ClientTable = ({ t, customers, loading, setLoading }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [costumerData, setCostumerData] = useState(null);
  const apiRef = useApiRef();

  const handleModal = (row) => {
    setCostumerData(row);
    setShowModal((curr) => !curr);
  };

  const handleActive = () => {
    setLoading(true);
    const body = { ...costumerData, active: !costumerData.active };
    editCustomer(body)
      .then(() => {
        const newCustomers = [];

        for (var i in apiRef.current.state.rows.idRowsLookup)
          newCustomers.push(apiRef.current.state.rows.idRowsLookup[i]);

        const costumerIndex = newCustomers.findIndex((costumer) => costumer.id == costumerData.id);
        newCustomers[costumerIndex] = { ...costumerData, active: !costumerData.active };
        apiRef.current.updateRows(newCustomers);
      })
      .catch((error) => console.log(error))
      .then(() => {
        handleModal(null);
        setLoading(false);
      });
  };

  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'firstName', headerName: t('clients:table.firstName'), width: 160 },
    { field: 'lastName', headerName: t('clients:table.lastName'), width: 160 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phoneNumber', headerName: t('clients:table.phoneNumber'), width: 130 },
    { field: 'address', headerName: t('clients:table.address'), width: 250 },
    {
      field: 'gender',
      headerName: t('clients:table.gender'),
      valueGetter: (params) => getGender(t, params.row.gender),
    },
    {
      field: 'birthDate',
      headerName: t('clients:table.birthDate'),
      width: 130,
      renderCell: (params) => {
        const date = new Date(params.row.birthDate);
        return date.toLocaleDateString();
      },
    },
    {
      field: 'edit',
      headerName: t('clients:table.edit'),
      renderCell: (params) => {
        return <Edit onClick={() => console.log('edit')} className={classes.editIcon} />;
      },
    },
    {
      field: 'active',
      headerName: t('clients:table.active'),
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
    <div className={classes.table}>
      <XGrid
        rows={customers}
        columns={columns}
        pageSize={10}
        loading={loading}
        apiRef={apiRef}
        disableSelectionOnClick
        // onPageChange={(pageChange) => console.log(pageChange)}
      />
      {showModal && <ModalConfirm t={t} handleModal={handleModal} handleActive={handleActive} />}
    </div>
  );
};

ClientTable.propTypes = {
  t: PropTypes.func.isRequired,
  customers: PropTypes.array,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default ClientTable;
