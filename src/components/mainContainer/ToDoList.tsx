import React, { useEffect } from "react";
import { List } from "@mui/material";
import ToDoListItem from "./ToDoListItem";
import { StyledBox } from "./styles/ToDoListStyles";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { getItemsAsync } from "../../redux/slices/toDoItemSlice";
import { AppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { toDoListActions } from "../../redux/slices/toDoListSlice";


/**
 * @brief Unordered list of tasks(items) with Read opeartion of tasks
 */
const ToDoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const toDoItems = useAppSelector((state) => state.toDoItem.toDoItems);
  const IDOfList = useAppSelector((state) => state.toDoList.activeID);
  const searchString = useAppSelector((state) => state.toDoItem.searchString);
  const filterString = useAppSelector((state) => state.toDoItem.filterString);
  
  const param  = useParams();

    //filtering
  let filteredItems = toDoItems.filter(item => filterString === "All" ? item : filterString === "Active" ? item.checked === false : item.checked === true);
  filteredItems = filteredItems.filter(item => (item.description.toLowerCase()).includes(searchString.toLowerCase()) || (item.name.toLowerCase()).includes(searchString.toLowerCase()));

  useEffect(()=>{
    if(IDOfList !== '0'){
      dispatch(getItemsAsync(IDOfList));
    }
    else if(param.id !== '0'){
      if(param.id != null){
        dispatch(getItemsAsync(param.id));
        dispatch(toDoListActions.updateActiveIDList(param.id));
      }
    }
  }, [dispatch, IDOfList, param]);


  return (
    <StyledBox>
      <List>
        {
          filteredItems.map((item, index) => (
            <ToDoListItem
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              date={item.date}
              taskListId={item.taskListId}
              checked={item.checked}
            />
          ))
        }
      </List>
    </StyledBox>
  );
};

export default ToDoList;
