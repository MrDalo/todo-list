import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const StyledIconButton = styled(IconButton)`
    transition-property: transform;
    transition-duration: 1s;

    &.active-button{
        transform: rotate(360deg);
    }

`;