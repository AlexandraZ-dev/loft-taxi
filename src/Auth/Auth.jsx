import React from 'react'
import {
  Box,
  makeStyles,
  Paper,
} from "@material-ui/core";
import {AuthModal} from "./AuthModal/AuthModal";
import {LogoForHeader} from "../Login/LogoForHeader/LogoForHeader";

const useStyles = makeStyles((theme) => ({
  backgroundBlack: {
    backgroundColor: "black",
    color: "white"
  },
}));


export const Auth = ({navigateTo}) => {
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
            <AuthModal navigateTo={navigateTo}/>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}
