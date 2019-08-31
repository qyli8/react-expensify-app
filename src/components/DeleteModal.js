
import React from 'react';
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'

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
          <button onClick={removeExpense}>YES</button>
          <button onClick={handleClose}>NO</button>
        </div>
      </div>
    </Fade>
  </Modal>

)
export default DeleteModal