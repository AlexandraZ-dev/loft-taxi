import React from 'react';
import {AppBar, Button, Container, Grid, makeStyles, Toolbar} from "@material-ui/core";
import {Logo} from "./Logo/Logo";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../actions";

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

export const Header = ({logOut}) => {
  const classes = useStyles();

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
            <Button data-testid='navigateMaps' color="inherit" ><Link to='/maps'>Maps</Link>
            </Button>

            <Button data-testid='navigateProfile' color="inherit" ><Link to='profile'>Profile</Link>
            </Button>

            <Button data-testid='navigateLoginOut' color="inherit"
                    onClick={logOut}
            >Log out</Button>
          </Toolbar>

        </Grid>
      </Container>
    </AppBar>
  )
}

export const HeaderWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {logOut}
)(Header)


