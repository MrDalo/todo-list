import { styled } from '@mui/material/styles';
import { InputBase, Box } from '@mui/material';


export const StyledBox = styled(Box)`
    margin-top: 10px;
    overflow-y: hidden;

`;

export const StyledButtonBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export const StyledForm = styled('form')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 15px;


    transition: 1s;
    z-index: 2;

    &.hidden-toggle{
        transform: translateY(-110%);
      }

`;

export const StyledTaskNameInputBox = styled(Box)`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      flex-warp: wrap;
`;

export const StyledInputBase = styled(InputBase)`
    &.input-error{
      border: 2px solid #FF5959;        
    }
`;