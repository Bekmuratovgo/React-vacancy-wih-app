import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MappedDataItem } from "../interface";

const initialState = {
    data: [],
    name: null,
    isLoading: false,
    error: ''
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataFetchingLoading (state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        dataFetchingError (state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        userName (state: any, action: PayloadAction<string | null>): void {
            state.name = action.payload;
            state.isLoading = false;            
        },
        dataFetch (state, action: PayloadAction<any>) {
            state.data = action.payload;
        }
    }
})

export default dataSlice.reducer;