
import { SET_FORM_DATA, SET_USER } from '../Actions/formAction';

const initialState = {
    formData: null,
    user: null,
};

const formDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA:
            return {
                ...state,
                formData: action.payload,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default formDataReducer;
