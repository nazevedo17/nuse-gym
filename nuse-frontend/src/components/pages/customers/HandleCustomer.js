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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  CircularProgress,
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

const HandleCustomer = ({ t, handleModal, handleCustomerSubmit, loading, error, customerData }) => {
  const classes = useStyles();

  const handleCustomerSchema = yup.object().shape({
    firstName: yup.string().required('errors.requiredField'),
    lastName: yup.string().required('errors.requiredField'),
    email: yup.string().email('invalid-email').required('errors.requiredField'),
    phoneNumber: yup.string().required('errors.requiredField'),
    address: yup.string().required('errors.requiredField'),
    gender: yup.number().required('errors.requiredField'),
    birthDate: yup.string().required('errors.requiredField'),
  });

  const handleBirthDate = (birthDate) => {
    let d = new Date(birthDate),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const formik = useFormik({
    initialValues: {
      id: customerData ? customerData.id : '',
      firstName: customerData ? customerData.firstName : '',
      lastName: customerData ? customerData.lastName : '',
      email: customerData ? customerData.email : '',
      phoneNumber: customerData ? customerData.phoneNumber : '',
      address: customerData ? customerData.address : '',
      gender: customerData ? customerData.gender : '',
      birthDate: customerData ? handleBirthDate(customerData.birthDate) : '',
      active: customerData ? customerData.active : true,
    },
    validationSchema: handleCustomerSchema,
    onSubmit: (values) => handleCustomerSubmit(values),
  });

  return (
    <Dialog open={true} onClose={handleModal} maxWidth="md" fullWidth>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="alert-dialog-title">
          {t(customerData ? 'customers:edit.title' : 'customers:add.title')}
        </DialogTitle>
        <DialogContent>
          <div className={classes.divInputs}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label={t('customers:table.firstName')}
              name="firstName"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.touched.firstName && !!formik.errors.firstName}
              helperText={formik.touched.firstName && t(formik.errors.firstName)}
              disabled={loading}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label={t('customers:table.lastName')}
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && !!formik.errors.lastName}
              helperText={formik.touched.lastName && t(formik.errors.lastName)}
              disabled={loading}
            />
          </div>
          <div className={classes.divInputs}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && t(formik.errors.email)}
              disabled={loading}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label={t('customers:table.phoneNumber')}
              id="phoneNumber"
              type="string"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
              helperText={formik.touched.phoneNumber && t(formik.errors.phoneNumber)}
              disabled={loading}
            />
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            label={t('customers:table.address')}
            id="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address && !!formik.errors.address}
            helperText={formik.touched.address && t(formik.errors.address)}
            disabled={loading}
          />
          <div className={classes.divInputs}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="label-language">{t('customers:table.gender')}</InputLabel>
              <Select
                labelId="label-gender"
                id="select-gender"
                value={formik.values.gender}
                onChange={(e) => formik.setFieldValue('gender', e.target.value)}
                label={t('customers:table.gender')}
                classes={{
                  outlined: classes.select,
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>{t('gender.male')}</MenuItem>
                <MenuItem value={2}>{t('gender.female')}</MenuItem>
                <MenuItem value={0}>{t('gender.other')}</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="birthDate"
              name="birthDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.birthDate}
              error={formik.touched.birthDate && !!formik.errors.birthDate}
              helperText={formik.touched.birthDate && t(formik.errors.birthDate)}
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
            {!loading ? t(customerData ? 'edit' : 'add') : <CircularProgress size={24} color="secondary" />}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

HandleCustomer.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
  handleCustomerSubmit: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  customerData: PropTypes.object,
};

export default HandleCustomer;
