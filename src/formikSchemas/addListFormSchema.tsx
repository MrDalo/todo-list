import * as yup from "yup";


export const addListSchema = yup.object().shape({
    listName: yup.string().min(2).max(20).required("Required"),
});