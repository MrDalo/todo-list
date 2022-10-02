import React from "react";
import { List } from "@mui/material";
import ToDoListItem from "./ToDoListItem";
import { StyledBox } from "./styles/ToDoListStyles";
import { useAppSelector } from "../../redux/hooks";

const ToDoList = () => {
  const toDoItems = useAppSelector((state) => state.toDoItem);

  return (
    <StyledBox>
      <List>
        {toDoItems.map((item, index) => (
          <ToDoListItem
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            date={item.date}
            taskListId={item.taskListId}
            checked={item.checked}
          />
        ))}
      </List>
    </StyledBox>
  );
};

export default ToDoList;
