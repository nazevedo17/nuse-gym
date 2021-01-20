import PropTypes from 'prop-types';

import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  CircularProgress,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  divInputs: {
    display: 'flex',
    '& > div:nth-of-type(1)': {
      marginRight: 10,
    },
    '& > div:nth-of-type(2)': {
      marginLeft: 10,
    },
  },
  select: {
    padding: '18.5px 14px',
  },
  formControl: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8,
  },
}));

const HandleMeasurement = ({ t, handleModal, handleMeasurementSubmit, loading, error, measurementData }) => {
  const classes = useStyles();

  const handleMeasurementSchema = yup.object().shape({
    age: yup.number().required('errors.requiredField'),
    height: yup.number().required('errors.requiredField'),
    weight: yup.number().required('errors.requiredField'),
    customerId: yup.number().required('errors.requiredField'),
    gender: yup.number().required('errors.requiredField'),
  });

  const handleDate = () => {
    let d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const formik = useFormik({
    initialValues: {
      id: measurementData ? measurementData.id : '',
      age: measurementData ? measurementData.age : '',
      height: measurementData ? measurementData.height : '',
      weight: measurementData ? measurementData.weight : '',
      customerId: measurementData ? measurementData.customerId : '',
      measurementDate: measurementData ? measurementData.measurementDate : handleDate(),
      bmi: null,
      gender: measurementData ? measurementData.gender : '',
    },
    validationSchema: handleMeasurementSchema,
    onSubmit: (values) => handleMeasurementSubmit(values),
  });

  return (
    <Dialog open={true} onClose={handleModal} maxWidth="md" fullWidth>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="alert-dialog-title">
          {t(measurementData ? 'measurements:edit.title' : 'measurements:add.title')}
        </DialogTitle>
        <DialogContent>
          <div className={classes.divInputs}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="customerId"
              label={t('measurements:table.customerId')}
              name="customerId"
              autoFocus
              type="number"
              onChange={formik.handleChange}
              value={formik.values.customerId}
              error={formik.touched.customerId && !!formik.errors.customerId}
              helperText={formik.touched.customerId && t(formik.errors.customerId)}
              disabled={loading}
              disabled={measurementData ? true : false}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="label-language">{t('gender.gender')}</InputLabel>
              <Select
                labelId="label-gender"
                id="select-gender"
                value={formik.values.gender}
                onChange={(e) => formik.setFieldValue('gender', e.target.value)}
                label={t('gender.gender')}
                classes={{
                  outlined: classes.select,
                }}
                disabled={measurementData ? true : false}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>{t('gender.male')}</MenuItem>
                <MenuItem value={2}>{t('gender.female')}</MenuItem>
                <MenuItem value={0}>{t('gender.other')}</MenuItem>
              </Select>
            </FormControl>
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="age"
            label={t('measurements:table.age')}
            name="age"
            autoFocus
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
            error={formik.touched.age && !!formik.errors.age}
            helperText={formik.touched.age && t(formik.errors.age)}
            disabled={loading}
          />
          <div className={classes.divInputs}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="height"
              label={t('measurements:table.height')}
              id="height"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.height}
              error={formik.touched.height && !!formik.errors.height}
              helperText={formik.touched.height && t(formik.errors.height)}
              disabled={loading}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="weight"
              label={t('measurements:table.weight')}
              id="weight"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.weight}
              error={formik.touched.weight && !!formik.errors.weight}
              helperText={formik.touched.weight && t(formik.errors.weight)}
              disabled={loading}
            />
          </div>
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
            {!loading ? t(measurementData ? 'edit' : 'add') : <CircularProgress size={24} color="secondary" />}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

HandleMeasurement.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
  handleMeasurementSubmit: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  measurementData: PropTypes.object,
  customerId: PropTypes.number,
};

export default HandleMeasurement;
