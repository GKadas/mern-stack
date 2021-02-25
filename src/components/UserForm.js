import React, {useState, useContext} from "react";
import {Context} from "../UserFormContext"

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

function UserForm () {
    const {userData, step, values, handleChange, nextStep, prevStep} = useContext(Context)

    switch (step) {
        case 1:
          return (
            console.log(step),
            console.log(userData),
            <FormUserDetails
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
          )
        case 2:
          return (
            console.log(step),
            <FormPersonalDetails
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          )
        case 3:
          return (
            <Confirm
              nextStep={nextStep}
              prevStep={prevStep}
              values={values}
            />
          )
        case 4:
          return <Success />
        default:
          (console.log('This is a multi-step form built with React.'))
    }
}

export default UserForm