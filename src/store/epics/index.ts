import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { RootState } from '../reducers';
import { kitchenEpic$, ProductsKitchenInput, ProductsKitchenOutput } from './kitchen';

type AllAcitonsInput = ProductsKitchenInput;

type AllActionsOutput = ProductsKitchenOutput;

export const epicMiddleware = createEpicMiddleware<
  AllAcitonsInput,
  AllActionsOutput,
  RootState,
  void
>();

export const rootEpic = combineEpics(kitchenEpic$);
