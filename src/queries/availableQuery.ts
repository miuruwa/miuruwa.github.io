import axios from "axios";
import { availableSlice } from "@reducers/Available";
import type { AppDispatch } from "@stores/store";

const URL = import.meta.env.VITE_SERVER_URL;

export const fetchAvailable = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(availableSlice.actions.SetLoading())
        const response = await axios.get<Requests.Option[]>(`${URL}/requests`)
        dispatch(availableSlice.actions.SetSuccess(response.data))
    } catch (exception_message) {
        dispatch(availableSlice.actions.SetError(`Unable to load request options: "${exception_message}"`))
    }
};