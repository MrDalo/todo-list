import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';


export const StyledBox = styled (Box)`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition-duration: 0.5s;

    padding-left: 30%;
    padding-right: 10%;


    &.hidden-side-menu{
        padding: 0;
    }
`;