import React from 'react'
import { StyledLink, StyledListItem, StyledListItemButton, StyledListItemText } from './styles/ToDoListItemNavStyles';

interface IProps{
  id: string,
  name: string
}

const ToDoListItemNav = ({id, name}: IProps) => {
  return (
    <StyledListItem>
        <StyledLink to={`/${id}`}>
          <StyledListItemButton>
              <StyledListItemText>
                {name}
              </StyledListItemText>
          </StyledListItemButton>
        </StyledLink>
    </StyledListItem>
  );
}

export default ToDoListItemNav;
