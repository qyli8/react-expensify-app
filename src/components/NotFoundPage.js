import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
export const NotFoundPage = () => (
  <div>Page Not Found 404 -<Link to="/home">Go Home</Link></div>
)
export default NotFoundPage;
