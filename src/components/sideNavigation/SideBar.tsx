import React from "react";
import {Box, IconButton} from "@mui/material";
import ToDoListNav from "./ToDoListNav";
import { StyledAddCircleOutlineIcon, StyledAppBar, StyledBox, StyledTitle, StyledToolbar, StyledIconButton} from "./styles/SideBarStyles";
import NewListForm from "./NewListForm";
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "25%",
        height: "100vh",
      }}
    >
      <StyledAppBar>
        <StyledIconButton>
          <MenuIcon sx={{fontSize: '40px'}}/>
        </StyledIconButton>

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
