import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {StoreType} from "./store";


export type RootState = typeof reducers
export type ReduxStateType = ReturnType<RootState>



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer
   /* sidebar: sidebarReducer*/
});

export const store: StoreType = createStore(reducers)


