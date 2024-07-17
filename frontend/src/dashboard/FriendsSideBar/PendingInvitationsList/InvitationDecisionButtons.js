import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, IconButton } from "@mui/material";

const InvitationDecisionButtons = ({
  acceptInvitationHandler,
  rejectInvitationHandler,
  disabled,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{ color: "red" }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
