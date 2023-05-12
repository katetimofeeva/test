import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'

import {siteThemes} from '../constants/siteThemes'
import { useEffect } from "react";

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
        dispatch({type: 'CHOOSE_COLOR', payload: siteThemes[theme]})
    },[theme, dispatch])

    const selectedTheme = useSelector((state) => state.colors)
    const colors = Object.values(selectedTheme)
    
    return (
        <Wraper>
        {colors.map((color, i)=> {
            return  <Circle backgroundColor={color} key={color+i} />
        })}
        </Wraper>
    ) 
}

export default ViewColor