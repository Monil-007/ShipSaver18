import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Optional: for asynchronous actions
import App from './App';

// Import your reducers
import formDataReducer from './Reducers/formReducers.js';


// Combine your reducers
const rootReducer = combineReducers({
    formData: formDataReducer,
    // Add other reducers if needed
});

// Create the Redux store
const appstore = createStore(rootReducer, applyMiddleware(thunk));

export default appstore;

