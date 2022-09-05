import { Dispatch } from 'react';
import { IActionTypes } from '../interface';
import DataService from '../Service';
import {dataSlice} from "./DataSlice";

export const getName = (navigate: Function | null = null) => async (dispatch: Dispatch<IActionTypes>) => {
    dispatch(dataSlice.actions.dataFetchingLoading(true));

    const name: string = JSON.parse(localStorage.getItem('name') || '[]');
    
    if (name && name.length) {
        dispatch(dataSlice.actions.userName(name));
        navigate && navigate('/')
    } else {
        dispatch(dataSlice.actions.userName(null));
    }
}

export const getPosts = () => async (dispatch: Dispatch<IActionTypes>) => {
    const response = await DataService.$getPosts();

    if (response && response.length) {
        dispatch(dataSlice.actions.dataFetch(response));
    }
}


