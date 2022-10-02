import React from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { StyledIconButton, StyledBox, StyledFormControl, StyledRadioGroup } from './styles/FilterFormStyles';
import { Box, FormControlLabel, Radio} from '@mui/material';



const FilterForm = () => {
    
    const handleClickOnIcon = () =>{
        
        const filterIconButton = document.getElementById('filter-icon-button');

        filterIconButton?.classList.toggle('activeIcon');
        Array.from(document.getElementsByClassName('form-checkbox')).forEach(item=>{
            item.classList.toggle('toggle-hidden');
        })
    }

    const handleRadioChange = () =>{
        console.log("RADIO change");
    }

  return (
    <StyledBox>
        <Box sx={{
            overflow: 'hidden',
            width: '80%',
            }}
        >

        <StyledFormControl className='form-checkbox'>
            <StyledRadioGroup
                row
                defaultValue="All"
                name="radio-buttons-group"
                onChange={handleRadioChange}
            >
                <FormControlLabel value="All" control={<Radio />} label="All" />
                <FormControlLabel value="Active" control={<Radio />} label="Active" />
                <FormControlLabel value="Finished" control={<Radio />} label="Finished" />
            </StyledRadioGroup>
        </StyledFormControl>
            
        </Box>

        <StyledIconButton id="filter-icon-button" onClick={handleClickOnIcon}>
            <FilterAltOutlinedIcon />
        </StyledIconButton>
    
    </StyledBox>
  );
}

export default FilterForm;