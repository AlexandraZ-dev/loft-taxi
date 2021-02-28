import React from 'react';
import {AppBar, Button, Container, Grid, makeStyles, Toolbar} from "@material-ui/core";
import {Logo} from "./Logo/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "black",
    color: "white"
  },
  button: {
    "&.active": {
      background:'black',
    },
  },
}));

export const Header = ({navigateTo}) => {
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
            <Button color="inherit" onClick={() => navigateTo('maps')
            }>Карты
            </Button>

            <Button color="inherit" onClick={() => navigateTo('profile')
            }>Profile
            </Button>

            <Button color="inherit" onClick={() => navigateTo('login')
            }>Выйти
            </Button>
          </Toolbar>

        </Grid>
      </Container>
    </AppBar>
  )

}

