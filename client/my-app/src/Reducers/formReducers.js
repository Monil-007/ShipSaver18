
import { SET_FORM_DATA } from '../Actions/formAction';

const initialState = {
    formData: null,
};

const formDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA:
            return {
                ...state,
                formData: action.payload,
            };
        default:
            return state;
    }
};

export default formDataReducer;
