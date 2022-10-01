import { styled } from "@mui/material/styles";

export const StyledInput = styled('input')`
  color: blue;
  font-size: 16px;
  border-radius: 10px;
  width: 70%;
  padding: 5px;

  &.input-error{
    border: solid 2px red;
  }

  &:focus{
    background-color: #eee;
    outline: initial;
  }

`;