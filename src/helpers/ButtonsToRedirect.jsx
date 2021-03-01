import React from 'react'
import {Link, Typography} from "@material-ui/core";
import PropTypes from "prop-types";

export const ButtonsToRedirect = ({buttonText, tittle, navigateTo}) => {
  return (
    <div style={{display: "block", flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: "98px"}}>
      <Typography variant='body1'>{tittle}</Typography>
      <Link
        style={{
          textDecoration: "none",
          color: "rgb(253, 191, 90)"
        }}
        component="button"
        variant="body1"
        onClick={navigateTo}
      >
        {buttonText}
      </Link>
    </div>
  )
}

ButtonsToRedirect.propTypes = {
  buttonText: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
}
