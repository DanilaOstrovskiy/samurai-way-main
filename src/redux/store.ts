import {ReducersType} from "./redux-store";
import {AnyAction, Store} from "redux";


export type StoreType = Store<ReducersType, AnyAction>;


export type ActionsType = ActionTypesProfile | ActionTypesDialogs | ActionTypesUsers | ActionTypesAuth

type ActionTypesProfile = { type: 'ADD_POST', postText: string } | { type: 'UPDATE_NEW_POST_TEXT'; newText: string } | {type: 'SET_USER_PROFILE', profile: ProfileType | null } | {type: "SET_STATUS", status: string};

export type ActionTypesDialogs = { type: 'UPDATE_NEW_MESSAGE_BODY'; body: string } | { type: 'SEND_MESSAGE', newMessageBody: string };

export type ActionTypesUsers = {type: 'FOLLOW', userId:number} | { type: 'UNFOLLOW'; userId:number} | {type :'SET_USERS', users: UserType[]} | {type: 'SET_CURRENT_PAGE', currentPage: number} | {type: 'SET_TOTAL_USERS_COUNT', totalCount: number} | {type: 'TOGGLE_IS_FETCHING', isFetching: boolean} | {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching: boolean, userId: number};

export type ActionTypesAuth = {type: 'SET_USER_DATA', data: {userId: string, email: string, login: string}}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    UsersPage: UsersPageType
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean


}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    totalCount: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: null;
    photos: PhotosType;
    followed: boolean;
    status: string
}

export type PhotosType = {
    large: string;
    small: string;
}


export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
    status: string
}

export type ProfileType = {
    photos: PhotosType
    aboutMe: string
    contacts: ContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}


export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    isAuth: boolean
}

export type PostType = {
    id: number
    message: string
    likesCount: number

}

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string

}
type SidebarType = {}

//<---------------------------------------------->
export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
export const SEND_MESSAGE = "SEND_MESSAGE";
//<--------------------------------------------->

/*export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 11}],
            newPostText: 'it-kamasutra',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Vicktor'},
                {id: 6, name: 'Andrew'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT-KAMA'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'YO'}
            ],
            newMessageBody: ""

        },
        ///sidebar: {}
    },
    _onChange(newState: RootStateType) {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(callback: (newState: RootStateType) => void) {
        this._onChange = callback;
    },

    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        /!*this._state.sidebar = sidebarReducer(this._state.sidebar, action);*!/

        this._onChange(this._state);
    }
}*/

export const addPostActionCreator = (postText: string) => {
    return {
        type: ADD_POST as typeof ADD_POST,
        postText: postText
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT as typeof UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}







