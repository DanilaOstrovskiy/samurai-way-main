import React from 'react';

import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {ReduxStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {DialogsPageType} from "../../types/dialogsPageTypes";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/actions/dialogsActions";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body:any) => void,
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch ): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body:any) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage:(newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}



export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs);

