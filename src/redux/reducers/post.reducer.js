import {FETCH_POSTS, ADD_POST} from "../post.types";

const initialState = {
    items: [],
    item: {}
};

export const postReducer = (state=initialState, action) =>{
    switch (action.type) {
        case FETCH_POSTS:
            console.log('reducer');
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};