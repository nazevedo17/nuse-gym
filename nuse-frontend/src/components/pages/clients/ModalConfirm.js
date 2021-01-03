import PropTypes from 'prop-types';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const ModalConfirm = ({ t, handleModal, handleActive }) => (
  <Dialog open={true} onClose={handleModal}>
    <DialogTitle id="alert-dialog-title">{t('clients:disable.title')}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{t('clients:disable.description')}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleModal} color="primary">
        {t('no')}
      </Button>
      <Button onClick={handleActive} color="secondary" autoFocus>
        {t('yes')}
      </Button>
    </DialogActions>
  </Dialog>
);

ModalConfirm.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
  handleActive: PropTypes.func,
};

export default ModalConfirm;
