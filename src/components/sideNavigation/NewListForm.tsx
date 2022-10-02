import React from 'react';
import { useFormik, FormikHelpers } from 'formik';
import { addListSchema } from '../../formikSchemas/addListFormSchema';
import { StyledTextField, StyledButton, StyledForm } from './styles/NewListFormStyles';
import { Box } from '@mui/material';

const NewListForm = () => {

    const onSubmitFunction = ( values:{listName: string;}, actions: FormikHelpers<{listName: string;}>) =>{
        console.log("SUBMITTED");
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
          <StyledTextField 
              id="listName" 
              label="List Name" 
              helperText="Please enter new list name"
              variant="standard"
              type="text"
              value={formik.values.listName}
              onChange={formik.handleChange}
              className={formik.errors.listName && formik.touched.listName ? "input-error" : ""}
          />
          <StyledButton variant="contained" type="submit">Add new List</StyledButton>
      </StyledForm>
    </Box>
  );
}

export default NewListForm;