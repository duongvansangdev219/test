import { createAction } from "redux-actions";
export const RESULT = {
    GET_ALL:"GET_RESULT",
    GET_ALL_SUCCESS:"GET_RESULT_SUCCESS",
    GET_ALL_FAILURE:"GET_RESULT_FAILURE",
}
export const getAllResultAction = createAction(RESULT.GET_ALL)
export const getAllResultSuccessAction = createAction(RESULT.GET_ALL_SUCCESS)
export const getAllResultFailureAction = createAction(RESULT.GET_ALL_FAILURE)