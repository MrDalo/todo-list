import React from "react";
import {Box, IconButton} from "@mui/material";
import ToDoList from "./ToDoList";
import { StyledAddCircleOutlineIcon, StyledAppBar, StyledBox, StyledTitle, StyledToolbar } from "./styles/SideBarStyles";


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
                <ToDoList/>
            </StyledBox>
            <IconButton>
                <StyledAddCircleOutlineIcon />
            </IconButton>

        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
};

export default SideBar;
