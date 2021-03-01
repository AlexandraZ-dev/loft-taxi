import React from 'react'
import {SingUpModal} from "./SingUpModal/SingUpModal";
import PropTypes from "prop-types";
import {BasePage} from "../helpers/BasePage";

export const SingUp = ({navigateTo}) => {
  return (
    <BasePage>
      <SingUpModal navigateTo={navigateTo}/>
    </BasePage>

  )
}

SingUp.propTypes = {
  navigateTo: PropTypes.func.isRequired,
}
