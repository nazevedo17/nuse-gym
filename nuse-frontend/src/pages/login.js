import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';
import { Router } from '../i18n';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Footer from 'src/components/layout/Footer';
import PageTitle from 'src/components/util/PageTitle';
import LoginForm from 'src/components/pages/login/LoginForm';

import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random?crossfit)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.primary.main,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Login = ({ t }) => {
  const classes = useStyles();

  useEffect(() => {
    if (Cookies.get('token')) {
      Router.push('/customers');
    }
  }, [Cookies.get('token')]);

  return (
    <>
      <PageTitle title={t('login:page-title')} />

      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t('login:page-title')}
            </Typography>

            <LoginForm t={t} />
          </div>
          <Footer t={t} />
        </Grid>
      </Grid>
    </>
  );
};

Login.getInitialProps = async () => ({
  namespacesRequired: ['common', 'login'],
});

Login.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Login);
