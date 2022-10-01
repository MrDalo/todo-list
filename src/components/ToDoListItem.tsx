import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react'

const ToDoListItem = () => {
  return (
    <ListItem
        sx={{
            paddingTop: '0px',
            paddingBottom: '0px'
        }}
    
    >
        <ListItemButton
            sx={{
                 borderBottom:'1px solid white',
                // borderTop:'1px solid white',
                paddingTop: '20px',
                paddingBottom: '20px'

            }}
        >
            <ListItemText
                sx={{
                    textAlign: 'center'
                }}
            >
                toDoList1
            </ListItemText>
        </ListItemButton>
    </ListItem>
  );
}

export default ToDoListItem;
