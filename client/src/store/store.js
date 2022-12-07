import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/reducer";
import reduxThunk from "redux-thunk";

const initState = {};
const store = createStore(reducer, initState, applyMiddleware(reduxThunk));

export default store;
