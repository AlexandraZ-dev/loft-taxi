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
            <Button  color="inherit" ><Link data-testid='navigateMaps' to='/maps'>Maps</Link>
            </Button>

            <Button  color="inherit" ><Link data-testid='navigateProfile' to='/profile'>Profile</Link>
            </Button>

            <Link to='/' data-testid='navigateLoginOut' color="inherit"
                   onClick={logOut}>LOG OUT</Link>
          </Toolbar>

        </Grid>
      </Container>
    </AppBar>
  )
}

export const HeaderWithAuth = connect(
  null,
  {logOut}
)(Header)


