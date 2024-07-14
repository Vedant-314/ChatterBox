export const validateLoginForm = ({mail, password}) =>{
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
    return password.length > 6 && password.length < 12;
};

export const validateMail = (mail) => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(mail);
};

const validateUsername = (username) => {
    return username.length > 2 && username.length < 13;
}

export const validateRegisterForm = ({mail, password, username}) => {
    return validateMail(mail) && validatePassword(password) && validateUsername(username);
}
