import { styled } from "@mui/material/styles";
import { AppBar, Typography, Box, Toolbar } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export const StyledToolbar = styled(Toolbar)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 60px;
`

export const StyledBox = styled(Box)`
    width: 100%;
    height: 35vh;
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
    margin-bottom: 15vh;
`;

export const StyledAppBar = styled(AppBar)`
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;


export const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
color: white;
font-size: 36px;

`;