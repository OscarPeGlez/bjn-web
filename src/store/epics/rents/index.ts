import { combineEpics } from 'redux-observable';
import { getRentsEpic$, GetRentsInput, GetRentsOutput } from './rents';

export type RentsInput = GetRentsInput;

export type RentsOutput = GetRentsOutput;

export const rentEpics$ = combineEpics(getRentsEpic$);
