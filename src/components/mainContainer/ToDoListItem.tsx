import React from 'react';
import { Checkbox, ListItemText } from '@mui/material';
import { StyledListItem, StyledListItemIcon, StyledTypography } from './styles/ToDoListItemStyles';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from '../../redux/hooks';
import { checkboxItemAsync, deleteItemAsync, IToDoItem, toDoItemActions } from '../../redux/slices/toDoItemSlice';


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
    dispatch(checkboxItemAsync({id: id, taskListId: taskListId, checked: !checked}));
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
          <StyledTypography
            variant='h5'
            padding={'5px 0'}
            overflow={'auto'}
            className={checked ? "checked" : ""}
          >
            {name}
          </StyledTypography>
          <StyledTypography 
            overflow={'auto'}
            className={checked ? "checked" : ""}
          >
            {description}
          </StyledTypography>
          <StyledTypography
            variant='body2'
            padding={'5px 0'}
            className={checked ? "checked" : ""}
          >
            {date.toLocaleString()}
          </StyledTypography>
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