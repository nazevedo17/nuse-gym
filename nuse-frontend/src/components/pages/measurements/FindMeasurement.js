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

import { getMeasurements } from 'src/api/api';

const FindMeasurement = ({ t, handleModal, setMeasurements }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const FindMeasurementsSchema = yup.object().shape({
    id: yup.number().required('errors.requiredField'),
  });

  const formik = useFormik({
    initialValues: {
      id: '',
    },
    validationSchema: FindMeasurementsSchema,
    onSubmit: (values) => handleFindMeasurement(values),
  });

  const handleFindMeasurement = (values) => {
    setLoading(true);
    const id = values.id;
    getMeasurements(id)
      .then((res) => {
        const { data } = res;
        setMeasurements([]);
        setMeasurements(data.measurements);
        handleModal();
      })
      .catch(() => setError(true))
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <Dialog open={true} onClose={handleModal} maxWidth="md" fullWidth>
      <DialogTitle id="alert-dialog-title">{t('measurements:find.title')}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label={t('measurements:find.textField')}
            name="id"
            autoFocus
            type="number"
            onChange={formik.handleChange}
            value={formik.values.id}
            error={formik.touched.id && !!formik.errors.id}
            helperText={formik.touched.id && t(formik.errors.id)}
            disabled={loading}
          />
          {error && (
            <Typography variant="subtitle2" align="center" color="error">
              {t('errors.general')}
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

FindMeasurement.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
  setMeasurements: PropTypes.func,
};

export default FindMeasurement;
