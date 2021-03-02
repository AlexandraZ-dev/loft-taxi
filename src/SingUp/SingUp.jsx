import React from 'react'
import {SingUpModal} from "./SingUpModal/SingUpModal";
import PropTypes from "prop-types";
import {BasePage} from "../helpers/BasePage";

export const SingUp = ({navigateTo, navigateToWhenIsLoggedOut}) => {
  return (
    <BasePage>
      <SingUpModal navigateTo={navigateTo} navigateToWhenIsLoggedOut={navigateToWhenIsLoggedOut}/>
    </BasePage>

  )
}

SingUp.propTypes = {
  navigateToWhenIsLoggedOut: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
}
