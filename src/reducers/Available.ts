import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: Requests.Query = {
  isLoading: false,
  error: "",
  requests: []
}

export const availableSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    SetSuccess (state: Requests.Query, action: PayloadAction<Requests.Option[]>) {
      state.isLoading = false;
      state.error = '';
      state.requests = action.payload;
    },
    SetLoading (state: Requests.Query) {
      state.isLoading = true;
    },
    SetError (state: Requests.Query,  action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
  },
})

export const AvailableReducer = availableSlice.reducer