import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useSelector, useDispatch} from 'react-redux'
import { SketchPicker } from 'react-color'

import { theme } from "../styles/theme";
import Sidebar from "../components/editor/Sidebar";
import Site from "../components/editor/Site";
import ModalWindow from "../components/editor/Modal/ModalWindow";
import { CHOOSE_COLOR_THEME } from '../redux/constant';
import useGetState from "../hook/useGetState";

// Component Styles
const Root = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1700px;
  margin: 0 auto;
  height: 100vh;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const RootContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: height 100ms linear;
  padding: 32px;
`;
const SiteWrapper = styled(motion.div)`
  flex: 1;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  border: 1px solid ${theme.colors.black[40]};
  border-radius: 8px;
  background-color: ${props=> props.color}; // Change to Primary color
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SideBarWrapper = styled(motion.div)`
  width: 64px;
  height: 100%;
`;
const MySketchPicker = styled(SketchPicker)`
  padding: 0px 2px;
  position: absolute;
  right: 40%
`
/** Root Editor View */
function Editor() {
  const palitre = useSelector((state) => state.palitra)
  const [name, theme]= useGetState('nameTheme', 'theme')
  const dispatch = useDispatch()
  function handleChangeComplete(color,  circleName){
    dispatch({type: CHOOSE_COLOR_THEME, payload: {circleName, color: color.hex}})
  }
  const pickerColor = Object.entries(palitre).map(([circleName, isOpen]) => {
    if (isOpen) {
    const color = theme[name][circleName];
      return (
        <MySketchPicker
          key={circleName}
          color={color}
          onChangeComplete={(e) => handleChangeComplete(e, circleName)}
        />
      );
    }
    return null;
  })
  return (
    <Root>
      <RootContent>
        <SiteWrapper color={theme[name].primary} layout>
          <ModalWindow/>
          <Site />
          {pickerColor}
        </SiteWrapper>
        <SideBarWrapper layout>
          <Sidebar />
        </SideBarWrapper>
      </RootContent>
    </Root>
  );
}
export default Editor;