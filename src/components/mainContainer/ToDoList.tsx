import React from 'react'
import { useParams } from 'react-router-dom';

const ToDoList = () => {
    const { id } = useParams();

  return (
    <div>ToDoList {id}</div>
  );
}

export default ToDoList;