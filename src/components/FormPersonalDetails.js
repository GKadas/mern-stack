import React, {useState, useContext} from "react"
import {Context} from "../UserFormContext"

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export function FormPersonalDetails () {

  const {userData, step, handleChange, nextStep, prevStep} = useContext(Context)
  const {occupation, city, bio} = userData
  
  function Continue (e) {
    e.preventDefault()
    nextStep(step);
  }

  function Back (e) {
    e.preventDefault()
    prevStep(step)
  }

  return (
    <MuiThemeProvider>
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Enter Personal Details" />
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            name='occupation'
            onChange={handleChange}
            defaultValue={occupation}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            name="city"
            onChange={handleChange}
            defaultValue={city}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            name='bio'
            onChange={handleChange}
            defaultValue={bio}
            margin="normal"
            fullWidth
          />
          <br />

          <Button
            color="secondary"
            variant="contained"
            onClick={Back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={Continue}
          >Continue</Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  )
}

export default FormPersonalDetails