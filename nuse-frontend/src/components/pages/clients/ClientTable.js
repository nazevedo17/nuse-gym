import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';
import { useState } from 'react';

import { Switch } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

import ModalConfirm from './ModalConfirm';

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
}));

const ClientTable = ({ t, costumers }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((curr) => !curr);
  };

  const handleActive = () => {
    handleModal();
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
    { field: 'birthDate', headerName: t('clients:table.birthDate'), width: 110 },
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
        return <Switch checked={params.row.active} onChange={handleModal} color="secondary" name="checkedB" />;
      },
    },
  ];

  return (
    <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={costumers}
        columns={columns}
        pageSize={10}
        loading={false}
        // onPageChange={(pageChange) => console.log(pageChange)}
        disableSelectionOnClick
      />
      {showModal && <ModalConfirm t={t} handleModal={handleModal} handleActive={handleActive} />}
    </div>
  );
};

ClientTable.propTypes = {
  t: PropTypes.func.isRequired,
  costumers: PropTypes.array,
};

export default ClientTable;
