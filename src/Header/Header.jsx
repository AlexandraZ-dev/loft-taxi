import React, {useContext} from 'react';
import {AppBar, Button, Container, Grid, makeStyles, Toolbar} from "@material-ui/core";
import {Logo} from "./Logo/Logo";
import {AuthContext} from "../AuthContext";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "black",
    color: "white"
  },
  button: {
    "&.active": {
      background: 'black',
    },
  },
}));

export const Header = ({navigateTo}) => {
  const classes = useStyles();
  const {logOut} = useContext(AuthContext)
  const loginOut = () => {
    logOut()
    navigateTo('login')
  }
  return (
    <AppBar position="static" className={classes.header}>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Logo/>
          <Toolbar disableGutters={true}>
            <Button data-testid='navigateMaps' color="inherit" onClick={() => navigateTo('maps')
            }>Maps
            </Button>

            <Button data-testid='navigateProfile' color="inherit" onClick={() => navigateTo('profile')
            }>Profile
            </Button>

            <Button data-testid='navigateLoginOut' color="inherit" onClick={loginOut}>Log out</Button>
          </Toolbar>

        </Grid>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired
}

