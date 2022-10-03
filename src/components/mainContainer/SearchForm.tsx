import React from 'react';
import { useFormik, FormikHelpers } from 'formik';
import SearchIcon from '@mui/icons-material/Search';
import { StyledForm, StyledIconButton, StyledInputBase } from './styles/SearchFormStyles';
import { useAppDispatch } from '../../redux/hooks';
import { toDoItemActions } from '../../redux/slices/toDoItemSlice';


const SearchForm = () => {

    const dispatch = useAppDispatch();

    
    const onSubmitFunction = ( values:{searchingItem: string;}, actions: FormikHelpers<{searchingItem: string;}>) =>{
      dispatch(toDoItemActions.clearSearchInput());
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
      
    const handleSearchBarOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
      formik.handleChange(e);
      dispatch(toDoItemActions.searchItems(e.target.value));
    }
      
    return (
        <StyledForm onSubmit={formik.handleSubmit} autoComplete='off'>
            <StyledInputBase
                id='searchingItem'
                type='text'
                placeholder="Search task in list"
                value={formik.values.searchingItem}
                onChange={handleSearchBarOnChange}
            />
            <StyledIconButton type="submit" aria-label="search">
              <SearchIcon />
            </StyledIconButton>
        </StyledForm>
    );
}

export default SearchForm;