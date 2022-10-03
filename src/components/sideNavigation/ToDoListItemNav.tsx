import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toDoListActions } from '../../redux/slices/toDoListSlice';
import { StyledLink, StyledListItem, StyledListItemButton, StyledListItemText } from './styles/ToDoListItemNavStyles';

interface IProps{
  id: string,
  name: string
}




const ToDoListItemNav = ({id, name}: IProps) => {

  const dispatch = useAppDispatch();

  const handleClickOnListName = () =>{
    dispatch(toDoListActions.updateActiveIDList(id));
  }



  return (
    <StyledListItem>
        <StyledLink to={`/${id}`} onClick={handleClickOnListName}>
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
