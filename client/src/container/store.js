import { createStore } from "redux";
import mainReducer from "./reducer";

// creating redux store 
const store = createStore(mainReducer);

export default store;