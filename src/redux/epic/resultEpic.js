import { defer, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { RESULT } from '../action';
import { getAllResultSuccessAction, getAllResultFailureAction } from '../action'
import config from '../../service/config';

const params = {
    lat:'10.8286935',
    lon:'106.6884868',
    apiKey:'35dba33a4b3d62be4dcf47dc5e298bd4'
}

const API_GET_ALL = config.HOST + `data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=${params.apiKey}`

const getAllResultEpic = (action$, store) => action$.pipe(
    ofType(RESULT.GET_ALL),
    mergeMap((action) => {
        return defer(() => {
            return ajax.getJSON(API_GET_ALL, config.HEADERS());
        })
        .pipe(
            map((response) => getAllResultSuccessAction(response)),
            catchError((error, source) => {
                if(error.status === 401) {
                    console.log('error',error.message)
                } else {
                    return of(getAllResultFailureAction(error))
                }
            })
        );
    })
);
export { getAllResultEpic }