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

const Layout = ({ t, children }) => {
  const classes = useStyles();

  return (
    <>
      <Header t={t} />
      <Container maxWidth="xl" className={classes.container}>
        {children}
        <Footer t={t} />
      </Container>
    </>
  );
};

Layout.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Layout;
