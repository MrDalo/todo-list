import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
    position: absolute;
    width: 200px;
    height: 60px;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 40px;
    z-index: 10;
    bottom: 20px;
    right: 20px;
    transition: 0.5s;
    display: none;
    
    &.loading{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        background-color: #1976d2;
    }
    
    &.error{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #f6a4a2;
        
    }
    
    &.success{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #b8e0b9;
    }

`;