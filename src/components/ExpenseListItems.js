import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit'
import TableCell from '@material-ui/core/TableCell';
import Hidden from '@material-ui/core/Hidden';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';

// import Edit from '@material-ui/icons'
const useStyles = makeStyles(theme => ({
  
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 28,
  },
  div:{
    display: "flex",
    "justify-content": "center"
  },
  fab: {
    margin: theme.spacing(1),
  },
  item_link: {
    "text-decoration": "none", 
    "color": "white"
  },
  list_item:{
    display: "flex",
    "justify-content": "space-between"
  },
  item_discription:{
    display:"block"
  }
}));
export const ListItems = ({ description, amount, createdAt, id, note }) => {
  const CustomTableCell = withStyles(theme => ({
    body: {
      fontSize: 16
    },
  }))(TableCell);

  const classes = useStyles();

  return(
    <TableRow>
      <Hidden smDown>
        <CustomTableCell align="center" size="medium" variant="body">{description}</CustomTableCell>
        <CustomTableCell align="center" size="medium" variant="body">{moment(createdAt).format('Do MMM, YYYY')}</CustomTableCell>
        <CustomTableCell align="center" size="medium" variant="body">{numeral(amount / 100).format('$0,0.00')}</CustomTableCell>
        <CustomTableCell align="center" size="medium" variant="body">
          <div className={classes.div}>
            <Fab size="small" className={classes.fab} color="primary" aria-label="edit">
              <Link className={classes.item_link} to={`/edit/${id}`}> <Edit className={classes.icon} /></Link>
            </Fab>
            <Fab size="small" className={classes.fab} color="secondary" aria-label="delete">
              <DeleteForeverIcon className={classes.icon}/>
            </Fab>
          </div> 
        </CustomTableCell>
      </Hidden>
      <Hidden mdUp>
        <CustomTableCell>
          <div className={classes.list_item}>
          <div >
            <div>
              <h3 className="list-item__title">{description}</h3>
              <span className="list-item__sub-title">{moment(createdAt).format('Do MMM, YYYY')}</span>
            </div>
            <h4 className="list-item__data">{numeral(amount / 100).format('$0,0.00')} </h4>
          </div>
          <div className={classes.div}>
            <Fab size="small" className={classes.fab} color="primary" aria-label="edit">
              <Link className={classes.item_link} to={`/edit/${id}`}> <Edit className={classes.icon} /></Link>
            </Fab>
            <Fab size="small" className={classes.fab} color="secondary" aria-label="delete">
              <DeleteForeverIcon className={classes.icon}/>
            </Fab>
          </div> 
          </div>
        </CustomTableCell>
      </Hidden>
    </TableRow>
    // {note&&<p>{note}</p>}

)};

export default ListItems