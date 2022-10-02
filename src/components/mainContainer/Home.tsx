import { Typography } from '@mui/material';
import React from 'react'
import {StyledBox} from './styles/HomeStyles'

const Home = () => {

  return (
    <StyledBox id="home-box">
        <Typography
            variant='h1'
            align='center'
        >
            Welcome!
        </Typography>
        <Typography
            variant='h3'
            align='center'
        >
            Please select task list from the side menu
        </Typography>
    </StyledBox>
  );
}

export default Home;