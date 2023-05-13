import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import {siteThemes} from '../constants/siteThemes'
import { useEffect } from "react";
import {CHOOSE_COLOR, SHOW_COLORS} from '../redux/constant'

const Wraper = styled.div`
    margin-top: 4%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor || null};
`;

function ViewColor () {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.nameTheme)
    useEffect(()=>{
        dispatch({type: CHOOSE_COLOR, payload: siteThemes[theme]})
    },[theme, dispatch])
    const selectedTheme = useSelector((state) => state.colors)
    const colors = Object.entries(selectedTheme)

    function handleClick(e, colorName) {
        dispatch({ type: SHOW_COLORS, payload: { colorName, isOpen: true } });
    }
    
    return (
        <Wraper>
        {colors.map((color, index)=> {
            return  <Circle backgroundColor={color[1]} key={color+index} onClick={(e)=>handleClick(e, color[0])}/>
        })}
        </Wraper>
    ) 
}

export default ViewColor