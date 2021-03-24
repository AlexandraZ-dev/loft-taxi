import React from 'react'
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {notSaved} from "../../actions";

export const ProfileSaved = ({notSaved}) => {
  return (
    <>
      <div data-testid='text'> Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
      <Button fullWidth={true} variant='contained' color='primary'
              style={{marginTop: '72px', borderRadius: "40px", fontSize: "1.3rem"}} onClick={notSaved}>
        <Link data-testid='link' to='/maps'>Перейти к заказу такси</Link>
      </Button>
    </>
  )
}

export const ProfileSavedWithAuth = connect(
  null,
  {notSaved}
)(ProfileSaved)

