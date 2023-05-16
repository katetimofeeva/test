import styled from "styled-components";
import { Select, MenuItem} from '@mui/material';
import { useDispatch } from 'react-redux'

import useGetState from '../hook/useGetState'
import {CHOOSE_THEME} from '../redux/constant'

const StyledSelect = styled(Select)`
    width: ${({width}) => width || '200px'};
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

function SelectedTheme (){
    
    const dispatch = useDispatch()
    const [nameTheme, siteThemes] = useGetState('nameTheme', 'theme')
    const colors = Object.entries(siteThemes[nameTheme])
    const themeArr = Object.entries(siteThemes)
 
    function handleChange(e){
        dispatch({type: CHOOSE_THEME, payload: e.target.value})
    }

    return (
        <StyledSelect 
        width="100%"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={nameTheme}
        onChange={(e)=> handleChange(e)}
        backgroundcolor={colors[0]}
    >   
        {themeArr.map((item)=>{
            return <MenuItem key={item[0]} value={item[0]}>{item[0]}</MenuItem>
            }
        )}
    </StyledSelect>
    )
}

export default SelectedTheme