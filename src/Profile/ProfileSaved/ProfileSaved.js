import React from 'react'
import {Button, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {notSaved} from "../../actions";

export const ProfileSaved = ({notSaved}) => {
  return (
    <>
      <Typography
        variant='body1'
        data-testid='text'
        style={{marginTop: '16px'}}
      >
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </Typography>
      <Button component={NavLink} variant='contained'
              color='primary'
              style={{marginTop: '16px', borderRadius: "40px", fontSize: "1.3rem", color: 'black'}}
              onClick={notSaved} to='/maps'>
        Перейти к заказу такси
      </Button>
    </>
  )
}

export const ProfileSavedWithAuth = connect(
  null,
  {notSaved}
)(ProfileSaved)

