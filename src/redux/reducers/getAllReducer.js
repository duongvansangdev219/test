import { handleActions } from "redux-actions";
import { RESULT } from "../action"
const initialState={
    isLoading: false,
    isError: false,
    responseData: {},
};
const actions = {
    [RESULT.GET_ALL]: () => ({
        isLoading: true,
    }),
    [RESULT.GET_ALL_SUCCESS]: (state, { payload: responseData }) => ({
        ...state,
        isLoading: false,
        responseData: responseData.response ? responseData.response : responseData,
    }),
    [RESULT.GET_ALL_FAILURE]: (state, { payload: responseData }) => ({
        ...state,
        isLoading: false,
        isError: true,
        responseData,
    })
}
export default handleActions(actions, initialState);