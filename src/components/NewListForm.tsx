import React from 'react';
import { useFormik, FormikHelpers } from 'formik';
import { addListSchema } from '../formikSchemas/addListFormSchema';
import { StyledInput } from './styles/NewListFormStyles';
import { TextField, Button } from '@mui/material';

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
    <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField 
            id="listName" 
            label="List Name" 
            helperText="Please enter new list name"
            variant="standard"
            type="text"
            value={formik.values.listName}
            onChange={formik.handleChange}
            className={formik.errors.listName && formik.touched.listName ? "input-error" : ""}

        />
        <Button variant="contained" type="submit">Add new List</Button>
    </form>
  );
}

export default NewListForm;