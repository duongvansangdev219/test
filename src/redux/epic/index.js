import { combineEpics } from 'redux-observable';
import { getAllResultEpic } from './resultEpic';

const rootEpic = combineEpics( getAllResultEpic)
export default rootEpic;