import React from 'react'
import { StyledContainer, StyledAccountCircleOutlinedIcon } from './styles/MainContentContainerStyles';
import { Typography } from '@mui/material';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';
import ToDoListSection from './ToDoListSection';



const MainContentCointainer = () => {
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
            Task list
        </Typography>

        <SearchForm />

        <FilterForm />

        <ToDoListSection />



    </StyledContainer>
  );
}

export default MainContentCointainer;