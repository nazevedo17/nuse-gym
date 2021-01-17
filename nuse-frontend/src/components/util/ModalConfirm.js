import PropTypes from 'prop-types';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const ModalConfirm = ({ t, handleModal, handleAction, title, description }) => (
  <Dialog open={true} onClose={handleModal}>
    <DialogTitle id="alert-dialog-title">{t(title)}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{t(description)}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleModal} color="primary">
        {t('no')}
      </Button>
      <Button onClick={handleAction} color="secondary" autoFocus>
        {t('yes')}
      </Button>
    </DialogActions>
  </Dialog>
);

ModalConfirm.propTypes = {
  t: PropTypes.func,
  handleModal: PropTypes.func,
  handleAction: PropTypes.func,
};

export default ModalConfirm;
