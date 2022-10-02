import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';


export const StyledBox = styled (Box)`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    transition-duration: 2s;

    padding-left: 30%;
    padding-right: 10%;

    z-index: 1;


    &.hidden-side-menu{
        padding-left: 10%;
        padding-right: 10%;
    }
`;