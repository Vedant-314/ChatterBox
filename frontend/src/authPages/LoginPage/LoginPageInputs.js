import React from 'react'
import InputWithLabels from '../../shared/components/InputWithLabels'

const LoginPageInputs = ({mail, setMail, password, setPassword}) => {
  return (
    <>
        <InputWithLabels
            value = {mail}
            setValue = {setMail}
            label = "E-mail"
            type = "email"
            placeholder = "Enter your E-mail"
        />
        <InputWithLabels
            value = {password}
            setValue = {setPassword}
            label = "Password"
            type = "password"
            placeholder = "Enter your password"
        />
    </>
  )
}

export default LoginPageInputs