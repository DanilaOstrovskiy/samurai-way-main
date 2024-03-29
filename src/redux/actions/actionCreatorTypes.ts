import {ProfileType} from "../../types/profilePageTypes";
import {UserType} from "../../types/usersTypes";

export type ActionsType = ActionTypesProfile | ActionTypesDialogs | ActionTypesUsers | ActionTypesAuth


type ActionTypesProfile = { type: 'ADD_POST', newPostText: string }| {type: 'SET_USER_PROFILE', profile: ProfileType | null } | {type: "SET_STATUS", status: string};

export type ActionTypesDialogs = { type: 'UPDATE_NEW_MESSAGE_BODY'; body: string } | { type: 'SEND_MESSAGE', newMessageBody: string };

export type ActionTypesUsers = {type: 'FOLLOW', userId:number} | { type: 'UNFOLLOW'; userId:number} | {type :'SET_USERS', users: UserType[]} | {type: 'SET_CURRENT_PAGE', currentPage: number} | {type: 'SET_TOTAL_USERS_COUNT', totalCount: number} | {type: 'TOGGLE_IS_FETCHING', isFetching: boolean} | {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching: boolean, userId: number};

export type ActionTypesAuth = {type: 'SET_USER_DATA', payload: {userId: string, email: string, login: string}}