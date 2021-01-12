import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  CircularProgress,
  Typography,
} from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { getCostumers } from '../../../../redux/actions';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Cookies from 'js-cookie';

const FindClient = ({ t, handleModal }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const FindClientSchema = yup.object().shape({
    username: yup.string().required('errors.requiredField'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: FindClientSchema,
    onSubmit: (values) => handleClient(values),
  });

  const handleClient = (values) => {
    dispatch(getCostumers({ filterName: values.username, token: Cookies.getJSON('token') }));
  };

  return (
    <Dialog open={true} onClose={handleModal} maxWidth="md" fullWidth>
      <DialogTitle id="alert-dialog-title">{t('clients:find.title')}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label={t('clients:find.textField')}
            name="username"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.touched.username && !!formik.errors.username}
            helperText={formik.touched.username && t(formik.errors.username)}
            disabled={loading}
          />
          {error && (
            <Typography variant="subtitle2" align="center" color="error">
              Erro
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModal} color="primary">
            {t('cancel')}
          </Button>
          <Button type="submit" onClick={() => {}} color="secondary" autoFocus>
            {!loading ? t('find') : <CircularProgress size={24} color="secondary" />}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

FindClient.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
};

export default FindClient;
