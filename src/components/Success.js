  
import React, { useContext } from 'react';
import {Context} from "../UserFormContext"

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export function Success () {

  const {userData, step, values, handleChange, nextStep, prevStep} = useContext(Context)
  const {firstName, lastName, email, occupation, city, bio} = userData
  
  function Continue (e) {
    nextStep()
  }

  function Back (e) {
    e.preventDefault()
    prevStep()
  }

  return (
    <MuiThemeProvider>
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>The entry was successfully entered in the Database</p>
        </Dialog>
      </>
    </MuiThemeProvider>
  )
}

export default Success;