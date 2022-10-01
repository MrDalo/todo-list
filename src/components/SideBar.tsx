import React from "react";
import {Box, IconButton} from "@mui/material";
import ToDoListNav from "./ToDoListNav";
import { StyledAddCircleOutlineIcon, StyledAppBar, StyledBox, StyledTitle, StyledToolbar} from "./styles/SideBarStyles";
import NewListForm from "./NewListForm";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "25%",
        height: "100vh",
      }}
    >
      <StyledAppBar position="relative">
        <StyledToolbar>
            <StyledTitle
              className="titleTypo"  
              align="center"
              variant="h3"
            >
              ToDo App
            </StyledTitle>
            <StyledBox>
                <ToDoListNav/>
            </StyledBox>
            <IconButton>
                <StyledAddCircleOutlineIcon />
            </IconButton>
            
            <NewListForm />

        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
};

export default SideBar;
