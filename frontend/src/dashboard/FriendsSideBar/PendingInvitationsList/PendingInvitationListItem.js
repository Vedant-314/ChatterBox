import React, { useState } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import {connect} from "react-redux"
import {getActions} from "../../../store/actions/friendsAction"


const PendingInvitationListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    console.log(id);
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };

  const handleRejectInvitation = () => {
    console.log(id);
    rejectFriendInvitation({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            margintTop: "15px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps) (PendingInvitationListItem);
