import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

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
  const router = useRouter();

  const LoginSchema = yup.object().shape({
    email: yup.string().email('errors.invalid.email').required('errors.required-field'),
    password: yup.string().required('errors.required-field'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => handleLogin(values),
  });

  const handleLogin = (values) => {
    router.push('/');
  };

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && !!formik.errors.email}
        helperText={formik.touched.email && t(formik.errors.email)}
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
      />
      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
        {t('login:page-title')}
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default LoginForm;
