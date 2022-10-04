import * as yup from "yup";

/**
 * @brief Form scheme for validation form for creating new Items in ToDoList
 */
export const addItemSchema = yup.object().shape({
    taskName: yup.string().min(1).max(20).required("Required"),
    taskDescription: yup.string(),
    taskDate: yup.date().required("Required"),
});