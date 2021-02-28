import React from 'react'
import {
  Box,
  makeStyles,
  Paper,
} from "@material-ui/core";
import {LoginModal} from "./LoginModal/LoginModal";
import {LogoForHeader} from "./LogoForHeader/LogoForHeader";

const useStyles = makeStyles((theme) => ({
  backgroundBlack: {
    backgroundColor: "black",
    color: "white"
  },
}));


export const Login = ({navigateTo}) => {
  const classes = useStyles();
  return (
    <Box display="flex" direction="row">
      <Box width="34%" height='100vh' display="flex" className={classes.backgroundBlack} alignItems='center'
           justifyContent="center">
        <LogoForHeader/>
      </Box>
      <Box height='100vh' width="66%" display="flex" alignItems='center' justifyContent="center">
        <Paper elevation={5} style={{borderRadius: "20px"}}>
          <Box width="520px" padding='48px 0'>
            <LoginModal navigateTo={navigateTo}/>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}
