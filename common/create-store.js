import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import reducer, { fetchProductsEpic, addToCartEpic } from './redux.js';

// observable that doesn't emit values
// const epic = () => EmptyObservable.create();

export default function createAppStore(devTools = (f => f), deps) {
  // combine our epics
  const rootEpic = combineEpics(fetchProductsEpic, addToCartEpic);

  // pass the one epic into createEpicMiddleWare
  const epicMiddleware = createEpicMiddleware(rootEpic);

  const middleware = applyMiddleware(
    thunk.withExtraArgument(deps),
    epicMiddleware,
  );

  const storeEnhancer = compose(
    middleware,
    devTools
  );

  return createStore(
    reducer,
    storeEnhancer
  );
}
