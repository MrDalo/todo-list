import React, { useState } from 'react';
import { Checkbox, ListItemText, Typography } from '@mui/material';
import { StyledForm, StyledInputBase, StyledListItem, StyledListItemIcon, StyledTypography } from './styles/ToDoListItemStyles';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from '../../redux/hooks';
import { useFormik, FormikHelpers } from 'formik';
import { addItemSchema } from '../../formikSchemas/addItemFormSchema';
import { checkboxItemAsync, deleteItemAsync, IToDoItem, updateItemAsync } from '../../redux/slices/toDoItemSlice';


interface IProps extends IToDoItem{
  
}


const ToDoListItem = ({id, name, description, date, taskListId, checked}: IProps) => {
  
  const dispatch = useAppDispatch();
  const [editItemFlag, setEditItemFlag] = useState<boolean>(false);

  const handleEditButtonAction = () =>{

    if(editItemFlag){
      formik.handleSubmit();
    }else{
      setEditItemFlag(!editItemFlag);
    }

  }
  
  const handleDeleteButtonAction = () =>{
    dispatch(deleteItemAsync({id: id, taskListId: taskListId}));
  }

  const handleCheckboxAction = () =>{
    dispatch(checkboxItemAsync({id: id, taskListId: taskListId, checked: !checked}));
  }

  const onSubmitFunction = ( 
    values:{
      taskName: string;
      taskDescription: string;
      taskDate: Date;}, 
    actions: FormikHelpers<{
      taskName: string;
      taskDescription: string;
      taskDate: Date;
    }>) =>
    {
      dispatch(updateItemAsync({
        id: id,
        taskListId: taskListId,
        name: values.taskName,
        description: values.taskDescription,
        date: new Date(values.taskDate).toLocaleString(),
      })); 

      setEditItemFlag(!editItemFlag);
    }

  const formik = useFormik({
    initialValues: {
      taskName: name,
      taskDescription: description,
      taskDate: new Date(date),
    },
    validationSchema: addItemSchema,
    onSubmit: (values, actions) => {
      onSubmitFunction(values, actions);
    },
  });


  return (
    <StyledListItem>
        <Checkbox
          onChange={handleCheckboxAction}
          checked={checked}
          sx={{ 
            '& .MuiSvgIcon-root': { fontSize: 35 },
            marginRight: '10px'
          }}
        />
        { !editItemFlag ? 
            <ListItemText>
              <StyledTypography
                variant='h5'
                padding={'5px 0'}
                overflow={'auto'}
                className={checked ? "checked" : ""}
              >
                {name}
              </StyledTypography>
              <StyledTypography 
                overflow={'auto'}
                className={checked ? "checked" : ""}
              >
                {description}
              </StyledTypography>
              <StyledTypography
                variant='body2'
                padding={'5px 0'}
                className={checked ? "checked" : ""}
              >
                {date.toLocaleString()}
              </StyledTypography>
            </ListItemText>
          : 
            <ListItemText>
              <StyledForm onSubmit={formik.handleSubmit} autoComplete='off' id="add-item-form" className='hidden-toggle'>
                <StyledInputBase
                    id='taskName'
                    type='text'
                    placeholder="Task name*"
                    value={formik.values.taskName}
                    onChange={formik.handleChange}
                    className={formik.errors.taskName && formik.touched.taskName ? "input-error" : ""}
                    sx={{ 
                      padding: '0px 10px',
                      width: "60%",
                    }}
                />
                <Typography sx={{color: '#FF2D2D', fontWeight: '800', fontSize: "12px"}}>
                  {formik.errors.taskName}
                </Typography> 
                    
                <StyledInputBase
                    id='taskDescription'
                    type='text'
                    multiline
                    placeholder="Task description"
                    value={formik.values.taskDescription}
                    onChange={formik.handleChange}
                    className={formik.errors.taskDescription && formik.touched.taskDescription ? "input-error" : ""}
                    sx={{ 
                      width: '100%',
                      padding: '5px 10px',
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
                      width: '190px',
                      padding: '0px 10px',
                    }}
                />

              </StyledForm>
            </ListItemText>

          
          }


        <StyledListItemIcon>
          <IconButton onClick={handleEditButtonAction}>
            <ModeEditOutlineOutlinedIcon sx={{color: 'black'}}/>
          </IconButton>
          <IconButton onClick={handleDeleteButtonAction}>
            <DeleteOutlineOutlinedIcon sx={{color: 'black'}} />
          </IconButton>
        </StyledListItemIcon>
    </StyledListItem>

  );
}

export default ToDoListItem;