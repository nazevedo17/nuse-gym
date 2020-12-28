import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Box, Switch } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

import PageTitle from 'src/components/util/PageTitle';
import Layout from 'src/components/layout';

// import A from 'components/util/A';
// import Img from 'components/util/Img';

import { useSelector } from 'react-redux';

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
}));

const Clients = ({ t }) => {
  const user = useSelector((state) => state.user);
  const classes = useStyles();
  console.log(user);

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
        return <Switch checked={params.row.active} onChange={() => {}} color="secondary" name="checkedB" />;
      },
    },
  ];

  return (
    <>
      <PageTitle title={t('pages.clients')} />
      <Layout t={t}>
        <section>
          <Box component="article" p={2}>
            <div style={{ height: 630, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                loading={false}
                onPageChange={(pageChange) => console.log(pageChange)}
              />
            </div>
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
