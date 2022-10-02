import { styled } from '@mui/material/styles';
import {IconButton, Box, FormControl, RadioGroup} from '@mui/material';


export const StyledFormControl = styled(FormControl)`
    position: relative;
    width: 100%;
    overFlow: hidden;

    transition-duration: 1.5s;

    &.toggle-hidden{
        transform: translateX(100%);
    }


`;

export const StyledRadioGroup = styled(RadioGroup)`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`;


export const StyledIconButton = styled(IconButton)`
    right: 10px;
    background-color: #ddd;
    transition-property: transform;
    transition-duration: 1s;

    &.activeIcon{
        transform: rotate(360deg);
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
    // height: 40px;


    // background-color: #ddd;
`;