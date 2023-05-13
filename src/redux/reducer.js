import {siteThemes} from '../constants/siteThemes'
import {
    CHOOSE_COLOR, 
    CHOOSE_THEME, 
    TOGGLE_MODAL, 
    SHOW_COLORS, 
    CHOOSE_COLOR_THEME} from './constant'

const initialState={
    toggleModal: false,
    nameTheme: 'default',
    colors: siteThemes.default,
    palitra: {
        'primary': false,
        'secondary': false,
        'tertiary': false
    }
}
function reducer (state = initialState, action){
    switch (action.type){
        case TOGGLE_MODAL:
            return {...state,
                palitra: {
                    'primary': false,
                    'secondary': false,
                    'tertiary': false
                },
                toggleModal : !state.toggleModal}
        case CHOOSE_THEME:
            return {...state, nameTheme: action.payload}
        case CHOOSE_COLOR:
            return {...state, colors: action.payload}
        case CHOOSE_COLOR_THEME:
            return {
                ...state,
                colors: { ...state.colors, [action.payload.circleName]: action.payload.color }
            };
        case SHOW_COLORS:
            return {
                ...state,
                palitra: {
                    'primary': false,
                    'secondary': false,
                    'tertiary': false,
                    [action.payload.colorName]: !state.palitra[action.payload.colorName]
                },
            };
        default: 
        return state
    }
}

export default reducer

