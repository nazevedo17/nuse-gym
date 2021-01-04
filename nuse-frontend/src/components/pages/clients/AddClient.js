import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

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

const AddClient = ({ t, handleModal }) => {
  const classes = useStyles();

  const loading = useSelector((state) => state.loading);

  return (
    <Dialog open={true} onClose={handleModal} maxWidth="md" fullWidth>
      <DialogTitle id="alert-dialog-title">{t('clients:add.title')}</DialogTitle>
      <DialogContent>
        <form>
          <div className={classes.divInputs}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label={t('clients:table.firstName')}
              name="firstName"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label={t('clients:table.lastName')}
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
              label={t('clients:table.phoneNumber')}
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
            label={t('clients:table.address')}
            id="address"
          />
          <div className={classes.divInputs}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="label-language">{t('clients:table.gender')}</InputLabel>
              <Select
                labelId="label-gender"
                id="select-gender"
                // value={i18n.language || 'en'}
                // defaultValue={i18n.language || 'en'}
                // onChange={handleChange}
                label={t('clients:table.gender')}
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
              label={t('clients:table.birthDate')}
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

AddClient.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
};

export default AddClient;
