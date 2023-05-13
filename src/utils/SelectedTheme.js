import styled from "styled-components";
import { Select, MenuItem} from '@mui/material';
import {useSelector, useDispatch } from 'react-redux'
import {siteThemes} from '../constants/siteThemes'
import {CHOOSE_THEME} from '../redux/constant'
const StyledSelect = styled(Select)`
    width: ${({width}) => width || '200px'};
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: ${({ backgroundcolor }) => backgroundcolor};
`;
function SelectedTheme (){
    
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.nameTheme)
    const colors = useSelector((state) => state.colors)
    const arr1 = Object.entries(siteThemes)
    function handleChange(e){
        dispatch({type: CHOOSE_THEME, payload: e.target.value})
    }
    return (
        <StyledSelect 
        width="100%"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={theme}
        onChange={(e)=> handleChange(e)}
        backgroundcolor={colors.primary}
    >   
        {arr1.map((item)=>{
            return <MenuItem key={item[0]} value={item[0]}>{item[0]}</MenuItem>
            }
        )}
    </StyledSelect>
    )
}
export default SelectedTheme