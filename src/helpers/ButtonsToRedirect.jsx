import React from 'react'
import {Button, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export const ButtonsToRedirect = ({buttonText, tittle, navigateTo}) => {
  return (
    <div style={{display: "block", flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: "98px"}}>
      <Typography data-testid='title' variant='body1'>{tittle}

        <Button component={NavLink} data-testid='navigateMaps' to={navigateTo} color="primary"
                style={{fontSize: '16px'}}>
          {buttonText}
        </Button>

      </Typography>
    </div>
  )
}

ButtonsToRedirect.propTypes = {
  buttonText: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
}
