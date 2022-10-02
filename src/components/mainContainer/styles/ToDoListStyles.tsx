import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";

export const StyledBox = styled(Box)`
    width: 80%;
    max-height: 45vh;
    margin-bottom: 20px;
    margin-top: 40px;

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