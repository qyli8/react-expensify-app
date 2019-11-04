
import React from 'react';
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux'
import { ModalClose} from '../actions/modal'
import { withStyles, makeStyles } from '@material-ui/core/styles';

const PrimaryButton = withStyles(() => ({
  "extended": {
    width: "5rem",
    fontSize: "13px",
    margin: "2% 0 0 0"
  }
}))(Fab)

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#f7f7ff",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modle_options:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '15px'
  },
  modle_message:{
    fontSize: '17px'
  }
}));

const DeleteModal = ({open, closeModal, description, removeExpense}) =>{ 
  const classes=useStyles()
  return(
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={open}
    onClose={closeModal}
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
          <PrimaryButton onClick={closeModal} variant="extended" color="secondary">
            NO
        </PrimaryButton>
        </div>
      </div>
    </Fade>
  </Modal>

)}

const mapStateToProps = (state, props) => {
  return {
    open: state.modal.open
  }
}

const matchDispatchaToProps = (dispatch) => ({
  closeModal:()=>(dispatch(ModalClose()))
})
export default connect(mapStateToProps, matchDispatchaToProps)(DeleteModal)