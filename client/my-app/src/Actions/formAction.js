// Action Types
export const SET_FORM_DATA = 'SET_FORM_DATA';

// Action Creators
export const setFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    };
};
