import { createReducer } from '@reduxjs/toolkit';
import { decrement, incremenet } from '../actions';

type CounterReducer = {
  count: number;
};

const initialState: CounterReducer = {
  count: 1,
};

export default createReducer<CounterReducer>(initialState, builder => {
  return builder
    .addCase(incremenet, state => {
      state.count += 1;
    })
    .addCase(decrement, state => {
      state.count -= 1;
    });
});
