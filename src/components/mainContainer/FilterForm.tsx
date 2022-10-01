import React from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { StyledIconButton, StyledBox, StyledFormGroup } from './styles/FilterFormStyles';
import { Box, Checkbox, FormControlLabel } from '@mui/material';



const FilterForm = () => {
    const filterIconButton = document.getElementById('filter-icon-button');

    const handleClickOnIcon = () =>{


        console.log(filterIconButton);
        filterIconButton?.classList.toggle('activeIcon');
        console.log(filterIconButton);

        Array.from(document.getElementsByClassName('form-checkbox')).forEach(item=>{
            item.classList.toggle('toggle-hidden');
        })
    }

  return (
    <StyledBox>
        <Box sx={{
            overflow: 'hidden',
            width: '80%',
            borderRadius: '40px'
            }}
        >
            <StyledFormGroup className='form-checkbox'>
                <FormControlLabel control={<Checkbox />} label="All" />
                <FormControlLabel control={<Checkbox />} label="Active" />
                <FormControlLabel control={<Checkbox />} label="Finished" />
            </StyledFormGroup>
        </Box>

        <StyledIconButton id="filter-icon-button" onClick={handleClickOnIcon}>
            <FilterAltOutlinedIcon />
        </StyledIconButton>
    
    </StyledBox>
  );
}

export default FilterForm;