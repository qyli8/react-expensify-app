
import React from 'react';
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const PrimaryButton = withStyles(() => ({
  "extended": {
    width: "5rem",
    fontSize: "13px",
    margin: "2% 0 0 0"
  }
}))(Fab)

const DeleteModal = ({classes, open, handleClose, description, removeExpense}) => (
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <div className={classes.paper}>
        <p  className={classes["modle_message"]}>Remove {description}, are you sure?</p>
        <div className={classes.modle_options}>
          <PrimaryButton onClick={removeExpense} variant="extended" color="primary" >
          YES
        </PrimaryButton>
          <PrimaryButton onClick={handleClose} variant="extended" color="secondary">
            NO
        </PrimaryButton>
        </div>
      </div>
    </Fade>
  </Modal>

)
export default DeleteModal