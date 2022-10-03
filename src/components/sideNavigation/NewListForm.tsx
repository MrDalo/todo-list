import React from 'react';
import { useFormik, FormikHelpers } from 'formik';
import { addListSchema } from '../../formikSchemas/addListFormSchema';
import { StyledButton, StyledForm, StyledInputBase } from './styles/NewListFormStyles';
import { Box, Typography } from '@mui/material';
import { addListAsync, toDoListActions } from '../../redux/slices/toDoListSlice';
import {v4 as uuidv4} from 'uuid';
import { useAppDispatch } from '../../redux/hooks';

const NewListForm = () => {

  const dispatch = useAppDispatch();

  const onSubmitFunction = ( values:{listName: string;}, actions: FormikHelpers<{listName: string;}>) =>{
      console.log("SUBMITTED");
      
      dispatch(addListAsync(values.listName));

      actions.resetForm();
  }


  const formik = useFormik({
      initialValues: {
        listName: "",
      },
      validationSchema: addListSchema,
      onSubmit: (values, actions) => {
        onSubmitFunction(values, actions);
      },
  });


  return (
    <Box sx={{
      overflow: 'hidden',
      width: '100%'
      }}
    >
      <StyledForm onSubmit={formik.handleSubmit} autoComplete="off" id="new-list-form" className='hidden-new-list-form'>
          <StyledInputBase 
              id="listName" 
              placeholder="New List name*"
              type="text"
              value={formik.values.listName}
              onChange={formik.handleChange}
              className={formik.errors.listName && formik.touched.listName ? "input-error" : ""}
          />

          {formik.errors.listName && formik.touched.listName ? 
            <Typography sx={{color: '#FF2D2D', fontWeight: '800', fontSize: "16px"}}>
              {formik.errors.listName}
            </Typography> 
            : ""
          }
          <StyledButton variant="contained" type="submit">Add new List</StyledButton>
      </StyledForm>
    </Box>
  );
}

export default NewListForm;