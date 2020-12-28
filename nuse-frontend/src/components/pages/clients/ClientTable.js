import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';
import { useState } from 'react';

import { Switch } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

import ModalConfirm from './ModalConfirm';

const rows = [
  {
    id: 1,
    active: true,
    firstName: 'Nuno',
    lastName: 'Azevedo',
    email: 'a18477@alunos.ipca.pt',
    phoneNumber: '911111111',
    address: 'rua mato da senra nº31 3ºesq, 4770-215 joane',
    gender: 1,
    birthDate: '07/04/2000',
  },
  {
    id: 100,
    active: false,
    firstName: 'Nuno Rafael',
    lastName: 'Ferreira Azevedo',
    email: 'a18477@alunos.ipca.pt',
    phoneNumber: '911111111',
    address: 'rua mato da senra nº31 3ºesq, 4770-215 joane',
    gender: 'Masculino',
    birthDate: '07/04/2000',
  },
];

const useStyles = makeStyles((theme) => ({
  editIcon: {
    margin: 'auto',
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    },
  },
  window: {
    'overflow-y': 'hidden',
  },
}));

const ClientTable = ({ t }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((curr) => !curr);
  };

  const handleActive = () => {
    handleModal();
    console.log('handleActive');
  };

  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'firstName', headerName: 'First Name', width: 160 },
    { field: 'lastName', headerName: 'Last Name', width: 160 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
    { field: 'address', headerName: 'Address', width: 200 },
    {
      field: 'gender',
      headerName: 'Gender',
      // valueGetter: (params) => `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
    { field: 'birthDate', headerName: 'BirthDate', width: 110 },
    {
      field: 'Edit',
      renderCell: (params) => {
        return <Edit onClick={() => console.log('edit')} className={classes.editIcon} />;
      },
    },
    {
      field: 'Active',
      renderCell: (params) => {
        return <Switch checked={params.row.active} onChange={handleModal} color="secondary" name="checkedB" />;
      },
    },
  ];

  return (
    <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        loading={false}
        onPageChange={(pageChange) => console.log(pageChange)}
        disableSelectionOnClick
        classes={{
          window: classes.window,
        }}
      />
      {showModal && <ModalConfirm handleModal={handleModal} handleActive={handleActive} />}
    </div>
  );
};

ClientTable.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(ClientTable);
