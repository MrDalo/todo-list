import { styled } from '@mui/material/styles';
import { ListItem, ListItemIcon, Typography } from "@mui/material";



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