import PropTypes from 'prop-types';
import { useState } from 'react';

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

import { useFormik } from 'formik';
import * as yup from 'yup';

import { getCustomers } from 'src/api/api';

const FindClient = ({ t, handleModal, setAllCustomers }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    setLoading(true);
    const body = { filterName: values.username };
    getCustomers(body)
      .then((res) => {
        const { data } = res;
        setAllCustomers(data.customers);
      })
      .catch(() => setError(true))
      .then(() => {
        setLoading(false);
        handleModal();
      });
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
  setAllCustomers: PropTypes.func,
};

export default FindClient;
