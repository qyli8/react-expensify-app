import React from 'react';
import NotFoundPage from '../components/NotFoundPage'

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Footer from "../losecomponents/Footer/Footer.js";
import GridContainer from "../losecomponents/Grid/GridContainer.js";
import GridItem from "../losecomponents/Grid/GridItem.js";
import Parallax from "../losecomponents/Parallax/Parallax.js";
import Header from "../losecomponents/Header/Header.js";
import HeaderLinks from "../losecomponents/Header/HeaderLinks.js";
import styles from "../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);
const BasePage = (props) => {
  console.log('basepage props: ', props)
  const classes = useStyles();
  // const { ...rest } = props;
  const Component = props.component
  const { ...rest } = props;
 
  return (
      <div>
          <Header
        absolute
        color="transparent"
        rightLinks={<HeaderLinks />}
        {...rest}
      />        
        <Parallax small image="../assets/img/lp.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  {props.title && <h1 className={classes.title}>{props.title}</h1>}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container} style={{ paddingBottom: "2rem" }}>
            <Component {...props}/>
          </div>
        </div>
        <Footer />
      </div>

  )
}
export default BasePage;
