import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'
export const ListItems = ({ description, amount, createdAt, id, note }) => (

  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('Do MMM, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')} </h3>
  </Link>
  // {note&&<p>{note}</p>}

);

export default ListItems