import PropTypes from 'prop-types';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const ModalConfirm = ({ t, handleModal, handleActive }) => (
  <Dialog open={true} onClose={handleModal}>
    <DialogTitle id="alert-dialog-title">Tens a certeza que pertendes desativar este utilizador?</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        O utilizador deixará de ter acesso à aplicação
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleModal} color="primary">
        Não
      </Button>
      <Button onClick={handleActive} color="primary" autoFocus>
        Sim
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
