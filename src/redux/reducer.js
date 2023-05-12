import {siteThemes} from '../constants/siteThemes'
import {CHOOSE_COLOR, CHOOSE_THEME, TOGGLE_MODAL} from './constant'
const initialState={
    toggleModal: false,
    nameTheme: 'default',
    colors: siteThemes.default
}
function reducer (state = initialState, action){
    switch (action.type){
        case TOGGLE_MODAL:
            return {...state, toggleModal : !state.toggleModal}
        case CHOOSE_THEME:
            return {...state, nameTheme: action.payload}
        case CHOOSE_COLOR:
            return {...state, colors: action.payload}
        default: 
        return state
    }
}

export default reducer