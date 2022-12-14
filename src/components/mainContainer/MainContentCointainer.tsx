import React from 'react'
import { StyledContainer, StyledAccountCircleOutlinedIcon } from './styles/MainContentContainerStyles';
import { Typography } from '@mui/material';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';
import ToDoListSection from './ToDoListSection';
import { useAppSelector } from '../../redux/hooks';


/**
 * @brief Main content container encapsulates every component in the main section of the app
 */
const MainContentCointainer = () => {
  const toDoListName = useAppSelector((state) =>state.toDoList.toDoLists.filter(list=> state.toDoList.activeID === list.id));

  
  return (
    <StyledContainer id="main-content-container" maxWidth={false} disableGutters >
        <StyledAccountCircleOutlinedIcon />
        <Typography
            variant='h3'
            align='center'
            width={'100%'}
            marginTop={'5vh'}
            marginBottom={'3vh'}
        >
            {toDoListName.length > 0 ? toDoListName[0].name : ""}
        </Typography>

        <SearchForm />

        <FilterForm />

        <ToDoListSection />



    </StyledContainer>
  );
}

export default MainContentCointainer;