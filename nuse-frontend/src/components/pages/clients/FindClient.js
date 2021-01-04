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

const FindClient = ({ t, handleModal }) => {
  const classes = useStyles();

  const loading = useSelector((state) => state.loading);

  return (
    <Dialog open={true} onClose={handleModal} maxWidth="md" fullWidth>
      <DialogTitle id="alert-dialog-title">{t('clients:find.title')}</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label={t('clients:find.textField')}
            name="name"
            autoFocus
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModal} color="primary">
          {t('cancel')}
        </Button>
        <Button onClick={() => {}} color="secondary" autoFocus>
          {t('find')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FindClient.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
};

export default FindClient;
