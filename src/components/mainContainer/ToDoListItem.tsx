import React from 'react';
import { Checkbox, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { StyledListItem, StyledListItemIcon } from './styles/ToDoListItemStyles';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from '../../redux/hooks';
import { deleteItemAsync, IToDoItem, toDoItemActions } from '../../redux/slices/toDoItemSlice';


interface IProps extends IToDoItem{

}


const ToDoListItem = ({id, name, description, date, taskListId, checked}: IProps) => {
  
  const dispatch = useAppDispatch();

  const handleEditButtonAction = () =>{
    dispatch(toDoItemActions.updateItem(id));
  }
  
  const handleDeleteButtonAction = () =>{
    dispatch(deleteItemAsync({id: id, taskListId: taskListId}));
  }

  const handleCheckboxAction = () =>{
    dispatch(toDoItemActions.checkedItem(id));
  }


  return (
    <StyledListItem>
        <Checkbox
          onChange={handleCheckboxAction}
          checked={checked}
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
            {name}
          </Typography>
          <Typography overflow={'auto'}>
            {description}
          </Typography>
          <Typography
            variant='body2'
            padding={'5px 0'}
          >
            {date.toLocaleString()}
          </Typography>
        </ListItemText>
        <StyledListItemIcon>
          <IconButton onClick={handleEditButtonAction}>
            <ModeEditOutlineOutlinedIcon sx={{color: 'black'}}/>
          </IconButton>
          <IconButton onClick={handleDeleteButtonAction}>
            <DeleteOutlineOutlinedIcon sx={{color: 'black'}} />
          </IconButton>
        </StyledListItemIcon>
    </StyledListItem>

  );
}

export default ToDoListItem;