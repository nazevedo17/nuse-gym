import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: '75px',
    width: 'calc(100% - 75px)',
  },
}));

const Layout = ({ t, children, handleAdd, handleFind, handleRefresh }) => {
  const classes = useStyles();

  return (
    <>
      <Header t={t} handleAdd={handleAdd} handleFind={handleFind} handleRefresh={handleRefresh} />
      <Container maxWidth="xl" className={classes.container}>
        {children}
        <Footer t={t} />
      </Container>
    </>
  );
};

Layout.propTypes = {
  t: PropTypes.func.isRequired,
  handleAdd: PropTypes.func,
  handleFind: PropTypes.func,
  handleRefresh: PropTypes.func,
};

export default Layout;
