import React from 'react'
import InputWithLabel from "../../shared/components/InputWithLabels"

const RegisterPageInputs = (props) => {
    const {mail, setMail, username, setUsername, password, setPassword} = props;


  return (
    <>
        <InputWithLabel
            value={mail}
            setValue = {setMail}
            label = "E-mail address"
            type = "mail"
            placeholder = "Enter e-mail address"
        />
        <InputWithLabel
            value={username}
            setValue = {setUsername}
            label = "Username"
            type = "text"
            placeholder = "Enter username"
        />
        <InputWithLabel
            value={password}
            setValue = {setPassword}
            label = "Password"
            type = "password"
            placeholder = "Enter password"
        />
    </>
  )
}

export default RegisterPageInputs