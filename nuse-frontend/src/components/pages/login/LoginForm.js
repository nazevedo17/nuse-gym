import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router } from '../../../i18n';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../redux/actions';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Cookies from 'js-cookie';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = ({ t }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.user);

  const LoginSchema = yup.object().shape({
    username: yup.string().required('errors.required-field'),
    password: yup.string().required('errors.required-field'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => handleLogin(values),
  });

  const handleLogin = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (user && user.token) {
      Cookies.set('token', user.token, { expires: 0.5 });
      Router.push('/');
    }
  }, [user]);

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.touched.username && !!formik.errors.username}
        helperText={formik.touched.username && t(formik.errors.username)}
        disabled={loading}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label={t('text-field.password')}
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && !!formik.errors.password}
        helperText={formik.touched.password && t(formik.errors.password)}
        disabled={loading}
      />
      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
        {!loading ? t('login:page-title') : <CircularProgress size={24} color="secondary" />}
      </Button>
      {error && (
        <Typography variant="subtitle2" align="center" color="error">
          {t('login:error')}
        </Typography>
      )}
    </form>
  );
};

LoginForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default LoginForm;
