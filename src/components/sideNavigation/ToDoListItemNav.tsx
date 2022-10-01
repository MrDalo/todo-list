import React from 'react'
import { StyledLink, StyledListItem, StyledListItemButton, StyledListItemText } from './styles/ToDoListItemNavStyles';
import {Link, useParams} from 'react-router-dom';

const ToDoListItemNav = () => {
  const ID = Date.now();

  return (
    <StyledListItem>
        <StyledLink to={`/${ID}`}>
          <StyledListItemButton>
              <StyledListItemText>
                Task list {ID}
              </StyledListItemText>
          </StyledListItemButton>
        </StyledLink>
    </StyledListItem>
  );
}

export default ToDoListItemNav;
