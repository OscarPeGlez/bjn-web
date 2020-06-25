import { ActionCreatorWithoutPayload, createAction } from '@reduxjs/toolkit';

export const incremenet: ActionCreatorWithoutPayload = createAction('[INCREMENT] update counter');

export type Increment = ReturnType<typeof incremenet>;

export const decrement: ActionCreatorWithoutPayload = createAction('[DECREMENT] update counter');

export type Decrement = ReturnType<typeof decrement>;
