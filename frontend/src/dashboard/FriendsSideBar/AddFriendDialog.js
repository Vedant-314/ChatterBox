import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {validateMail} from "../../shared/utils/validators";
import InputWithLabel from "../../shared/components/InputWithLabels"
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import {connect} from 'react-redux';
import { getActions } from '../../store/actions/friendsAction';

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, sendFriendInvitation = () => {} }) => {

    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');

    const handleSendInvitation = () => {
        sendFriendInvitation({
            targetMailAddress: mail,
        }, handleCloseDialog)
    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    }

    useEffect(() => {
        setIsFormValid(validateMail(mail));
    },[mail, setIsFormValid])

  return (
    <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
    >
        <DialogTitle>
            <Typography>
                Invite a Friend
            </Typography>
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                <Typography>
                    Enter your friend's email address to invite them.
                </Typography>
            </DialogContentText>
                <InputWithLabel
                    label="Mail"
                    type='text'
                    value={mail}
                    setValue = {setMail}
                    placeholder="Enter mail address"
                />
        </DialogContent>
        <DialogActions>
            <CustomPrimaryButton
                onClick={handleSendInvitation}
                disabled={!isFormValid}
                label="Send"
                additionalStyles={{
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: "10px"
                }}
            />
        </DialogActions>
    </Dialog>
  )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null,mapActionsToProps) (AddFriendDialog)