import { styled } from "@mui/material/styles";

import { Container } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export const StyledContainer = styled(Container)`
    position: relative;
    margin-left: 30%;
    width: 70%;
    height: 100vh;
    padding-right: 10%;
    padding-left: 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    transition-duration: 0.5s;

    &.hidden-side-menu{
        margin-left: 10%;
        width: 80%; 
    }
    
`;


export const StyledAccountCircleOutlinedIcon = styled(AccountCircleOutlinedIcon)`
    font-size: 54px;
    position: absolute;
    right: 40px;
    top: 3%;
    color: #1976d2;


`;