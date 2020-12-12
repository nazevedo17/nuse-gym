import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie';

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
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Cookies.get('token')) {
      dispatch(logout());
      router.push('/login');
    }
  }, [Cookies.get('token')]);

  return (
    <>
      <Header />
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
