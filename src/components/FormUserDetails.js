import React, {useState, useContext} from "react";
import {Context} from "../UserFormContext"

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export function FormUserDetails () {

  const {userData, step, values, handleChange, nextStep} = useContext(Context)
  
  function Continue (e) {
    e.preventDefault()
    nextStep()
  }

  return (
    <MuiThemeProvider>
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            name="firstName"
            onChange={handleChange}
            defaultValue={userData.firstName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            defaultValue={userData.lastName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            name="email"
            onChange={handleChange}
            defaultValue={userData.email}
            margin="normal"
            fullWidth
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => Continue(e)}
          >Continue</Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  )
}

export default FormUserDetails