import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Optional: for asynchronous actions

// Import your reducers
import formDataReducer from './reducers/formDataReducer';

// Combine your reducers
const rootReducer = combineReducers({
    formData: formDataReducer,
    // Add other reducers if needed
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Wrap your app with the Redux Provider
const App = () => (
    <Provider store={store}>
        <YourAppComponent />
    </Provider>
);

export default App;
