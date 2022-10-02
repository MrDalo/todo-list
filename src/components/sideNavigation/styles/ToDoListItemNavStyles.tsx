import { styled } from '@mui/material/styles';
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledListItem = styled(ListItem)`
    padding-top: 0px;
    padding-bottom: 0px;
`;
    
export const StyledListItemButton = styled(ListItemButton)`
    border-bottom: 1px solid white;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const StyledListItemText = styled(ListItemText)`
    text-align: center;
`;

export const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: white;
`;