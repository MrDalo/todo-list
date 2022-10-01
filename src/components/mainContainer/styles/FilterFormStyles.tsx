import { styled } from "@mui/material/styles";
import {IconButton, Box, FormGroup} from '@mui/material';


export const StyledFormGroup = styled(FormGroup)`
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 40px;
    overFlow: hidden;

    transition-duration: 2s;
    
    &.toggle-hidden{
        transform: translateX(100%);
    }
    
    
`;
    



export const StyledIconButton = styled(IconButton)`
    right: 10px;
    background-color: #ddd;
    transition-property: transform;
    transition-duration: 1s;

    &.activeIcon{
        transform: rotate(360deg);
    }

    @keyframes filterRotation{
        to {transform: rotate(360deg);}
    }


`;


export const StyledBox = styled(Box)`
    position: relative;
    width: 60%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    height: 40px;


    // background-color: #ddd;
    border-radius: 30px;
`;