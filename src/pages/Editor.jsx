import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import { useSelector,} from 'react-redux'

import Sidebar from "../components/editor/Sidebar";
import Site from "../components/editor/Site";
import ModalWindow from "../components/editor/Modal";

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
  background-color: ${props=> props.color.primary}; // Change to Primary color
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideBarWrapper = styled(motion.div)`
  width: 64px;
  height: 100%;
`;

/** Root Editor View */
function Editor() {
  const colors = useSelector((state) => state.colors)
  return (
    <Root>
      <RootContent>
        <SiteWrapper color={colors} layout>
          <ModalWindow/>
          <Site />
        </SiteWrapper>
        <SideBarWrapper layout>
          <Sidebar />
        </SideBarWrapper>
      </RootContent>
    </Root>
  );
}

export default Editor;
