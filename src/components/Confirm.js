import React, {useContext} from 'react'
import {Context} from "../UserFormContext"
import axios from "axios"

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

function Confirm () {

  const {userData, step, values, handleChange, nextStep, prevStep} = useContext(Context)
  const {firstName, lastName, email, occupation, city, bio} = userData

  function Continue (e) {
    e.preventDefault()
    nextStep()
  }

  function Back (e) {
    e.preventDefault()
    prevStep()
  }

  function OnSubmit (){
    const jsonObj = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      occupation: occupation,
      city: city,
      bio: bio,
    }
    console.log(jsonObj)
    console.log(firstName)

    axios.post("http://localhost:5000/users/add", jsonObj)
    .then(res => console.log(res.data))
    .finally(Continue)  

  }

  return (
    <MuiThemeProvider>
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <br />

          <Button
            color="secondary"
            variant="contained"
            onClick={Back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={OnSubmit}
          >Confirm & Continue</Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  )
}

export default Confirm