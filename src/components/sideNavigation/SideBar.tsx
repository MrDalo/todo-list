import React from "react";
import ToDoListNav from "./ToDoListNav";
import { StyledAddCircleOutlineIcon,  StyledMainBox, StyledAppBar, StyledBox, StyledTitle, StyledToolbar, StyledMenuIconButton, StyledCircleIconButton} from "./styles/SideBarStyles";
import NewListForm from "./NewListForm";
import MenuIcon from '@mui/icons-material/Menu';

/**
 * @brief Side menu component which encapsulates small components
 */
const SideBar = () => {
  
  const handleBurgerMenuClick = () =>{
    const arrayOfElements = document.getElementsByClassName('toggle-element');
    const homeBox = document.getElementById("home-box");
    const mainContentContainer = document.getElementById('main-content-container');

    homeBox?.classList.toggle('hidden-side-menu');
    mainContentContainer?.classList.toggle('hidden-side-menu');

    Array.from(arrayOfElements).forEach(element =>{
      element?.classList.toggle('hidden-side-menu');
    });

  }


  const handleAddListIconClick= () =>{
    document.getElementById('add-task-button')?.classList.toggle('activeIcon');
    document.getElementById('new-list-form')?.classList.toggle('hidden-new-list-form');
    
  }




  return (
    <StyledMainBox className="toggle-element">
      <StyledAppBar className="toggle-element">
        <StyledMenuIconButton className="toggle-element" onClick={handleBurgerMenuClick}>
          <MenuIcon sx={{fontSize: '40px'}}/>
        </StyledMenuIconButton>

        <StyledToolbar className="toggle-element">

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
            <StyledCircleIconButton id="add-task-button" onClick={handleAddListIconClick}>
                <StyledAddCircleOutlineIcon />
            </StyledCircleIconButton>
            
            <NewListForm  />

        </StyledToolbar>
      </StyledAppBar>
    </StyledMainBox>
  );
};

export default SideBar;
