import { styled } from "@mui/material/styles";
import { AppBar, Typography, Box, Toolbar, IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export const StyledMainBox = styled(Box)`
  position: fixed;
  width: 25%;
  height: 100vh;
  transition: 2s;

  &.hidden-side-menu{
    transform: translateX(-70%);
  }
`;

export const StyledMenuIconButton = styled(IconButton)`
  position: absolute;
  right: 15px;
  top: 15px;

  color: white;
  font-size: 40px;
  z-index: 3;

  transition: 2s color;

  &.hidden-side-menu{
    color: #1976d2;
  }

`;

export const StyledCircleIconButton = styled(IconButton)`
  transition-property: transform;
  transition-duration: 1s;
  z-index: 3;

  &.activeIcon{
      transform: rotate(360deg);
  }

`;


export const StyledToolbar = styled(Toolbar)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 80px;

  &.hidden-side-menu{
    display: none;
  }
`

export const StyledBox = styled(Box)`
    width: 100%;
    max-height: 35vh;
    overflow-y: scroll;
    margin-bottom: 20px;

    &::-webkit-scrollbar{
          width: 5px;
    }
    
    &::-webkit-scrollbar-track{
          background-color: transparent;
    }

    &::-webkit-scrollbar-thumb{
      background-color: #ddd;
      border-radius: 10px;
    }
`;


export const StyledTitle = styled(Typography)`
  width: 100%;
  margin-bottom: 8vh;
`;

export const StyledAppBar = styled(AppBar)`
  position: relative;
  width: 100%;
  height: 100%;

  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;


  transition: 2s;

  &.hidden-side-menu{
    background-color: white;
    box-shadow: none;
  }
`;


export const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
  color: white;
  font-size: 36px;

`;


