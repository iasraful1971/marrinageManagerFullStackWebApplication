// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import ThunkMiddleware from "redux-thunk";
// import { userReducer } from "./reducers/authReducer";
// import { ScheduleReducer } from "./reducers/ScheduleReducer";


// const rootReducer = combineReducers({ 
//     userReducer,
//     ScheduleReducer
// });

// const middleware = [ThunkMiddleware];
//  const store = createStore(rootReducer, compose(applyMiddleware(...middleware), 
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  ));



//  export default store;


import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/authReducer";
import { ScheduleReducer } from "./reducers/ScheduleReducer";


const reducer = combineReducers({
    ScheduleReducer,
    userReducer
});

let initialState = {
  
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
