import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { StyledListItem } from './styles/ToDoListItemStyles';

const ToDoListItem = () => {
  return (
    <StyledListItem>
        <ListItemText>
            Task Item
        </ListItemText>
    </StyledListItem>

  );
}

export default ToDoListItem;