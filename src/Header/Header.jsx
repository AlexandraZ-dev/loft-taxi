import React from 'react';
import {AppBar, Button, Container, Grid, makeStyles, Toolbar} from "@material-ui/core";
import {Logo} from "./Logo/Logo";
import { NavLink} from "react-router-dom";
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
            <Button data-testid='navigateMaps'>
              <NavLink data-testid='navigateMaps' style={{color:'#ffffff'}} to='/maps' color="inherit" activeStyle={{ color: '#ffc617' }}>
                Карта
              </NavLink>
            </Button>

            <Button data-testid='navigateProfile'>
              <NavLink data-testid='navigateProfile' style={{color:'#ffffff'}} to='/profile' color="inherit" activeStyle={{ color: '#ffc617' }}>
                Профиль
              </NavLink>
            </Button>

            <Button data-testid='navigateLoginOut' onClick={logOut} >
              <NavLink data-testid='navigateProfile' style={{color:'#ffffff'}} to='/login' color="inherit" activeStyle={{ color: '#ffc617' }}>
                Выйти
              </NavLink>
            </Button>

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


