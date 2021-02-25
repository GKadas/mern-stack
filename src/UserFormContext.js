import React, {useState, useEffect} from 'react';
const Context = React.createContext()

// import FormUserDetails from './components/FormUserDetails';
// import FormPersonalDetails from './components/FormPersonalDetails';
// import Confirm from './components/Confirm';
// import Success from './components/Success';

// const checkStep = userData.step

function ContextProvider ({children}) {
  
  const [userData, setUserData]  = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  })
  const [step, setStep] = useState(1)
  
  const {firstName, lastName, email, occupation, city, bio} = userData
  const values = {firstName, lastName, email, occupation, city, bio}

  // Proceed to next step
  function nextStep () { 
    setStep(prevState => prevState + 1)
  }

  // Go back to prev step
  function prevStep () {
    setStep(prevState => prevState - 1)
  }

  // Handle fields change
  function handleChange (e) {
    let value = e.target.value;
    let name = e.target.name;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  return (
    <Context.Provider value={{userData, step, values, nextStep, prevStep, handleChange}}>
      {children}
    </Context.Provider>
  )
}


export {ContextProvider, Context}