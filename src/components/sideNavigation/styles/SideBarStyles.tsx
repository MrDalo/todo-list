import { styled } from "@mui/material/styles";
import { AppBar, Typography, Box, Toolbar, IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 15px;
  top: 15px;

  color: white;
  font-size: 40px;
  z-index: 3;
`;

export const StyledToolbar = styled(Toolbar)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 80px;
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
`;


export const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
  color: white;
  font-size: 36px;

`;
