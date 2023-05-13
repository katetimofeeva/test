
import { Box, Typography} from '@mui/material';
import styled from "styled-components";
import { useSelector } from 'react-redux'

import SelectedTheme from '../../../utils/SelectedTheme';
import ViewColor from '../../../utils/ViewColor';

const style = {
    position: 'absolute', 
    top: '50%',
    right: 0,
    transform: 'translate(-50%, -50%)',
    width: '25%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};
const MyBox = styled(Box)`
    display: ${props => props.toggle ? 'block' : 'none'};
`;
function ModalWindow (){
    const toggle = useSelector((state) => state.toggleModal)
    return (
    <MyBox sx={style} toggle={toggle? 'true': ''}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Site Styles
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Theme
        </Typography>
        <SelectedTheme/>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Theme Colors
        </Typography>
        <ViewColor/>
    </MyBox>
    )
}
export default ModalWindow
