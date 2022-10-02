import { styled } from '@mui/material/styles';
import { Button, InputBase } from '@mui/material';

export const StyledInputBase = styled(InputBase)`
  font-size: 16px;
  padding: 2px 10px;
  border-radius: 20px;
  background-color: white; 
  width: 100%;
  
  border: 2px solid #fff;

    &.input-error{
      border: 2px solid #FF5959;        
    }

`;

export const StyledButton = styled(Button)`
  background-color: white;
  color: #1976d2;
  width: 50%;

  &:hover{
    // color: white;
    background-color: #ddd;
  }
`;

export const StyledForm = styled('form')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  transition: 1s;

  &.hidden-new-list-form{
    transform: translateY(-110%);
  }
`;
