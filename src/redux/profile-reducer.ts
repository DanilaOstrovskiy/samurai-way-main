import {ActionType, PostType, ProfilePageType, UPDATE_NEW_POST_TEXT} from "./state";



 const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            const newState: ProfilePageType = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            return newState;
        }
        case 'UPDATE_NEW_POST_TEXT': {
            const newState: ProfilePageType = {
                ...state,
                newPostText: action.newText
            };
            return newState;
        }
        default:
            return state;
    }
}

export default profileReducer;