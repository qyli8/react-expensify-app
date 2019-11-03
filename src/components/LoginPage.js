import React from 'react'
import {login} from '../actions/auth'
import {dashboard} from '../actions/path'
import {connect} from 'react-redux'
// @material-ui/core ../losecomponents
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core ../losecomponents

import Footer from "../losecomponents/Footer/Footer.js";
import GridContainer from "../losecomponents/Grid/GridContainer.js";
import GridItem from "../losecomponents/Grid/GridItem.js";
import Button from "../losecomponents/CustomButtons/Button.js";
import Card from "../losecomponents/Card/Card.js";
import CardBody from "../losecomponents/Card/CardBody.js";
import CardHeader from "../losecomponents/Card/CardHeader.js";
import CardFooter from "../losecomponents/Card/CardFooter.js";
import CustomInput from "../losecomponents/CustomInput/CustomInput.js";

import styles from "../assets/jss/material-kit-react/views/loginPage.js";


const useStyles = makeStyles(styles);
const useCustomStyles = makeStyles({
  loginHeading:{
    fontSize: "2.5rem"
  },
  loginButton:{
    fontSize: "2rem"
  }
})
export const LoginPage=(props) => {
  const goToDashboard=()=>{
    props.history.push("/dashboard")
    props.login('AUTHORIZED')
    props.dashboard('DASHBOARD')
    // console.log(props.setCurrentPath('/dashboard'))
  }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const customClasses= useCustomStyles();
  return (
    <div>
    
      <div
        className={classes.pageHeader}
        style={{
          backgroundColor: "#696969",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4 className={customClasses.loginHeading}>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Username"
                      id="first"
                      value="Joanna567"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      value="abcefg"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button children="ENTER" className={customClasses.loginButton} simple color="primary" size="lg" onClick={goToDashboard}>
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}


const mapDispatchToProps =(dispatch)=>({
  login: (status)=> dispatch(login(status)),
  dashboard: (path)=> dispatch(dashboard(path))
})

export default connect(undefined,mapDispatchToProps)(LoginPage);
