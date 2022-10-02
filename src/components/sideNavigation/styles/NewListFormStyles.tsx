import { styled } from "@mui/material/styles";
import { TextField, Button } from '@mui/material';

export const StyledTextField = styled(TextField)`
  font-size: 16px;
  border-radius: 10px;
  width: 100%;
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
