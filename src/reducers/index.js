import {combineReducers} from "redux";
import todosReducer from "./todosReducer";
import totalActiveReducer from "./totalActiveReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    todos: todosReducer,
    totalActive: totalActiveReducer,
    errors: errorReducer
})
