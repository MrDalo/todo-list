import * as yup from "yup";

/**
 * @brief Form scheme for validation form for creating new ToDoLists
 */
export const addListSchema = yup.object().shape({
    listName: yup.string().min(2).max(20).required("Required"),
});