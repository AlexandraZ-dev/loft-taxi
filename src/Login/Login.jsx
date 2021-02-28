import React, {useContext} from 'react'
import {
  Box,
  makeStyles,
  Paper,
} from "@material-ui/core";
import {LoginModal} from "./LoginModal/LoginModal";
import {LogoForHeader} from "./LogoForHeader/LogoForHeader";
import {AuthContext} from "../AuthContext";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  backgroundBlack: {
    backgroundColor: "black",
    color: "white"
  },
}));


export const Login = ({navigateTo}) => {
  const classes = useStyles();
  const {logIn} = useContext(AuthContext)
  const onSubmitLogin = (event) => {
    event.preventDefault()
    const {email, password} = event.target
    logIn(email.value, password.value)
  }
  return (
    <Box display="flex" direction="row">
      <Box width="34%" height='100vh' display="flex" className={classes.backgroundBlack} alignItems='center'
           justifyContent="center">
        <LogoForHeader/>
      </Box>
      <Box height='100vh' width="66%" display="flex" alignItems='center' justifyContent="center">
        <Paper elevation={5} style={{borderRadius: "20px"}}>
          <Box width="520px" padding='48px 0'>
            <LoginModal navigateTo={navigateTo} onSubmit={onSubmitLogin}/>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

Login.propTypes = {
  navigateTo: PropTypes.func.isRequired
}
