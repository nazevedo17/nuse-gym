import PropTypes from 'prop-types';

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

const AddCustomer = ({ t, handleModal }) => {
  const classes = useStyles();

  return (
    <Dialog open={true} onClose={handleModal} maxWidth="md" fullWidth>
      <DialogTitle id="alert-dialog-title">{t('customers:add.title')}</DialogTitle>
      <DialogContent>
        <form>
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label={t('customers:table.lastName')}
              id="lastName"
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label={t('customers:table.phoneNumber')}
              id="phoneNumber"
              type="number"
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
          />
          <div className={classes.divInputs}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="label-language">{t('customers:table.gender')}</InputLabel>
              <Select
                labelId="label-gender"
                id="select-gender"
                // value={i18n.language || 'en'}
                // defaultValue={i18n.language || 'en'}
                // onChange={handleChange}
                label={t('customers:table.gender')}
                classes={{
                  outlined: classes.select,
                }}
              >
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
              label={t('customers:table.birthDate')}
              name="birthDate"
              type="date"
              defaultValue="2017-05-24"
            />
          </div>

          {/* <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {!loading ? 'Add' : <CircularProgress size={24} color="secondary" />}
          </Button> */}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModal} color="primary">
          {t('cancel')}
        </Button>
        <Button onClick={() => {}} color="secondary" autoFocus>
          {t('add')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddCustomer.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
};

export default AddCustomer;
