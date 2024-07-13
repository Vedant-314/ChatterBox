import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () =>{
    return "Please fill correct email and password"
}
const getFormValidMessage = () =>{
    return "Press to Log in!"
}

const LoginPageFooter = ({ handleLogin, isFormValid }) => {

    const navigate = useNavigate();

    const handlePushToRegisterPage = () => {
        navigate("/register");
    }

    return (
        <>
        <Tooltip
            title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
                <div>
                    <CustomPrimaryButton
                        label="Log In"
                        additionalStyles={{ marginTop: '30px' }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
        </Tooltip>
            <RedirectInfo 
                text='New Here? '
                redirectText="Create an Account"
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    )
}

export default LoginPageFooter;
