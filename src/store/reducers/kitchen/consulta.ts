import { createReducer } from '@reduxjs/toolkit';
import { updateSearchProductKitchen } from '../../actions/kitchen';

const estadoInicial = '';

export default createReducer<string>(estadoInicial, builder => {
  return builder.addCase(updateSearchProductKitchen, (state, action) => {
    return action.payload;
  });
});
