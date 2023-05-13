import styled from "styled-components";
import StyleIcon from '@mui/icons-material/Style';
import { useSelector, useDispatch } from 'react-redux'
import { createTheme } from '@mui/material/styles';

import {TOGGLE_MODAL} from '../../../redux/constant'

// Component Styles

const Root = styled.div`
  height: 100%;
  width: 100%;
`;
const WrapIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Icon = styled.div`
  width: 35px;
  height:35px;
  background-color: ${({color, toggle}) => toggle? color.primary: ''};
  border-radius:20%;
  display: flex;
  align-items: center;
  justify-content: center;
`

/** Sidebar view of the Editor page */
function Sidebar() {
  const dispatch = useDispatch()
  const colors = useSelector((state) => state.colors)
  const toggle = useSelector((state) => state.toggleModal)
  
  const theme = createTheme({ colors});

  function handleClick (){
    dispatch({type: TOGGLE_MODAL})
  }

  return( 
  <Root>
    <WrapIcon >
      <Icon onClick={handleClick} color={colors} toggle={toggle}>
        <StyleIcon sx={{ color: theme.colors.secondary}}/>
      </Icon>
    </WrapIcon>
  </Root>
  )
}

export default Sidebar;
