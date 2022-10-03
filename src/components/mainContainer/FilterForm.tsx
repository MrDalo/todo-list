import React from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { StyledIconButton, StyledBox, StyledFormControl, StyledRadioGroup } from './styles/FilterFormStyles';
import { Box, FormControlLabel, Radio} from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { toDoItemActions } from '../../redux/slices/toDoItemSlice';



const FilterForm = () => {

    const dispatch = useAppDispatch();
    
    const handleClickOnIcon = () =>{
        const filterIconButton = document.getElementById('filter-icon-button');

        filterIconButton?.classList.toggle('activeIcon');
        Array.from(document.getElementsByClassName('form-radios')).forEach(item=>{
            item.classList.toggle('toggle-hidden');
        })
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const radioValue = (e.currentTarget as Element).getAttribute('value');
        const value:string = radioValue !==  null ? radioValue : "All";
        dispatch(toDoItemActions.filterItems(value));
    }

  return (
    <StyledBox>
        <Box sx={{
            overflow: 'hidden',
            width: '80%',
            }}
        >

            <StyledFormControl className='form-radios toggle-hidden'>
                <StyledRadioGroup
                    row
                    defaultValue="All"
                    name="radio-buttons-group"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleRadioChange(e)}
                >
                    <FormControlLabel className='radio-button' value="All" control={<Radio />} label="All" />
                    <FormControlLabel className='radio-button' value="Active" control={<Radio />} label="Active" />
                    <FormControlLabel className='radio-button' value="Finished" control={<Radio />} label="Finished" />
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