import { styled } from "@mui/material/styles";
import { TextField, IconButton, InputBase } from '@mui/material';

export const StyledFrom = styled('form')`
    position: relative;
    width: 60%;
    height: 38px;

    display: flex;
    align-items: center;

    border-radius: 40px;
    background-color: #ddd;
`;


export const StyledInputBase = styled(InputBase)`
    margin-left: 20px;
    width: 80%;

`;


export const StyledIconButton = styled(IconButton)`
    position: absolute;
    right: 0px;

`;