import React from 'react'
import { Button, Typography } from '@mui/material';
import { useFormik, FormikHelpers } from 'formik';
import { StyledForm, StyledBox, StyledButtonBox, StyledInputBase, StyledTaskNameInputBox } from './styles/AddItemFormStyles';
import { addItemSchema } from '../../formikSchemas/addItemFormSchema';

const AddItemForm = () => {

  const onSubmitFunction = ( 
    values:{
      taskName: string;
      taskDescription: string;
      taskDate: Date;}, 
    actions: FormikHelpers<{
      taskName: string;
      taskDescription: string;
      taskDate: Date;
    }>) =>{
    console.log(values);
    actions.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      taskName: "",
      taskDescription: "",
      taskDate: new Date(),
    },
    validationSchema: addItemSchema,
    onSubmit: (values, actions) => {
      onSubmitFunction(values, actions);
    },
  });

  return (
    <StyledBox>
      <StyledForm onSubmit={formik.handleSubmit} autoComplete='off' id="add-item-form" className='hidden-toggle'>
            <StyledTaskNameInputBox>
              <StyledInputBase
                  id='taskName'
                  type='text'
                  placeholder="Task name*"
                  value={formik.values.taskName}
                  onChange={formik.handleChange}
                  className={formik.errors.taskName && formik.touched.taskName ? "input-error" : ""}
                  sx={{ 
                    border: '1px solid #ddd',
                    borderRadius: '30px',
                    padding: '3px 10px',
                    backgroundColor: '#ddd',
                  }}
              />
              <Typography sx={{color: '#FF2D2D', fontWeight: '800', fontSize: "12px"}}>
                {formik.errors.taskName}
              </Typography> 
              
            </StyledTaskNameInputBox>
            <StyledInputBase
                id='taskDescription'
                type='text'
                multiline
                placeholder="Task description"
                value={formik.values.taskDescription}
                onChange={formik.handleChange}
                className={formik.errors.taskDescription && formik.touched.taskDescription ? "input-error" : ""}
                sx={{ 
                  width: '40%',
                  border: '1px solid #ddd',
                  borderRadius: '30px',
                  padding: '8px 10px',
                  backgroundColor: '#ddd',
                  minWidth: '250px',

                }}
            />
            <StyledInputBase
                id='taskDate'
                type='datetime-local'
                value={formik.values.taskDate}
                onChange={formik.handleChange}
                className={formik.errors.taskDate && formik.touched.taskDate ? "input-error" : ""}
                sx={{ 
                  border: '1px solid #ddd',
                  borderRadius: '30px',
                  padding: '3px 10px',
                  backgroundColor: '#ddd',
                }}
            />
            <StyledButtonBox>
              <Button type="submit" variant='contained' sx={{ width: '200px'}}>Create new task</Button>
            </StyledButtonBox>

      </StyledForm>
    </StyledBox>


  );
}

export default AddItemForm;