import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export const StyledContainer = styled(Container)`
    position: relative;
    width: 100%;
    // height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
    // margin-right: 0;
    // margin-left: 0;
    z-index: 1;


    padding-right: 10%;
    padding-left: 30%;


    transition-duration: 2s;

    &.hidden-side-menu{
        padding-left: 10%;
    }
    
`;


export const StyledAccountCircleOutlinedIcon = styled(AccountCircleOutlinedIcon)`
    font-size: 54px;
    position: absolute;
    right: 40px;
    top: 3%;
    color: #1976d2;


`;