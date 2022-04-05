import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epic';
import rootReducer from './reducers'

const epicMiddleware = createEpicMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware),
);

export default function store() {  
   const store = createStore(rootReducer, enhancer);
   epicMiddleware.run(rootEpic);
   return store;
}