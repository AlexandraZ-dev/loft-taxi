import React from 'react'
import {Button, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const ButtonsToRedirect = ({buttonText, tittle, navigateTo}) => {
  return (
    <div style={{display: "block", flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: "98px"}}>
      <Typography variant='body1'>{tittle}</Typography>
      <Button
        style={{
          textDecoration: "none",
          color: "rgb(253, 191, 90)"
        }}
      >
        <Link to={navigateTo}>{buttonText}</Link>
      </Button>
    </div>
  )
}

ButtonsToRedirect.propTypes = {
  buttonText: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
}
