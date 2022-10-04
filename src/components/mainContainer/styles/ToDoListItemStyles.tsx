import { styled } from '@mui/material/styles';
import { InputBase, ListItem, ListItemIcon, Typography, Box } from "@mui/material";



export const StyledListItem = styled(ListItem)`
    width: 98%;
    // height: 100px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;


    background-color: #ddd;
    border-radius: 20px;

    
`;

export const StyledTypography = styled(Typography)`
    &.checked{
        text-decoration: line-through;
    }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 5px;


`;


export const StyledForm = styled('form')`
display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 5px;

    
    transition: 1s;
    z-index: 2;
    
`;


export const StyledInputBase = styled(InputBase)`
    background-color: white;
    border-radius: 15px;

    &.input-error{
        border: 2px solid #FF5959;        
    }
`;


export const StyledButtonBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
`;