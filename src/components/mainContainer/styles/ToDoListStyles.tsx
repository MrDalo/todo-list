import { styled } from '@mui/material/styles';
import {Box} from "@mui/material";

export const StyledBox = styled(Box)`
    width: 95%;
    max-height: 45vh;
    margin-bottom: 10px;
    margin-top: 20px;

    overflow-y: scroll;
    
    &::-webkit-scrollbar{
          width: 5px;
    }
    
    &::-webkit-scrollbar-track{
          background-color: transparent;
    }

    &::-webkit-scrollbar-thumb{
      background-color: #ddd;
      border-radius: 10px;
    }   

`;