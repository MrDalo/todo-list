import React from 'react';
import { Checkbox, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { StyledListItem, StyledListItemIcon } from './styles/ToDoListItemStyles';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';


const ToDoListItem = () => {

  const handleCheckboxAction = () =>{
    console.log("checked");
    console.log();

  }


  return (
    <StyledListItem>
        <Checkbox
          onChange={handleCheckboxAction}
          sx={{ 
            '& .MuiSvgIcon-root': { fontSize: 35 },
            marginRight: '10px'
          }}
        />
        <ListItemText>
          <Typography
            variant='h5'
            padding={'5px 0'}
            overflow={'auto'}
          >
            Task name
          </Typography>
          <Typography overflow={'auto'}>
            Task asdfasdfa assdfsdfasdfasdfasdf dfasdfasdfasdf dfasdfasdfasdfdfa sdfasdfasdf fasdfasdfasdf
          </Typography>
          <Typography
            variant='body2'
            padding={'5px 0'}
          >
            12/5/2022 18:00
          </Typography>
        </ListItemText>
        <StyledListItemIcon>
          <IconButton onClick={handleCheckboxAction}>
            <ModeEditOutlineOutlinedIcon sx={{color: 'black'}}/>
          </IconButton>
          <IconButton onClick={handleCheckboxAction}>
            <DeleteOutlineOutlinedIcon sx={{color: 'black'}} />
          </IconButton>
        </StyledListItemIcon>
    </StyledListItem>

  );
}

export default ToDoListItem;