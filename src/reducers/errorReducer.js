import * as Constants from "../actions/constants";

export default function errorReducer(state = [], action) {
    switch(action.type) {
        case Constants.SEND_ERROR:
            return [action.msg, ...state];
        case Constants.CLEAR_ERRORS:
            return [];
    }

    return state;
}