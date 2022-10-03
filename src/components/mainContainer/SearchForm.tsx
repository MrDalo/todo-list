import React from 'react';
import { useFormik, FormikHelpers } from 'formik';
import SearchIcon from '@mui/icons-material/Search';
import { StyledForm, StyledIconButton, StyledInputBase } from './styles/SearchFormStyles';


const SearchForm = () => {

    const onSubmitFunction = ( values:{searchingItem: string;}, actions: FormikHelpers<{searchingItem: string;}>) =>{
        console.log("SUBMITTED");
        actions.resetForm();
    }

    const formik = useFormik({
        initialValues: {
          searchingItem: "",
        },
        onSubmit: (values, actions) => {
          onSubmitFunction(values, actions);
        },
        
    });


    return (
        <StyledForm onSubmit={formik.handleSubmit} autoComplete='off'>
            <StyledInputBase
                id='searchingItem'
                type='text'
                placeholder="Search task in list"
                value={formik.values.searchingItem}
                onChange={formik.handleChange}
            />
            <StyledIconButton type="submit" aria-label="search">
              <SearchIcon />
            </StyledIconButton>
        </StyledForm>
    );
}

export default SearchForm;