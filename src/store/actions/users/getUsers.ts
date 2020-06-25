import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  createAction,
} from '@reduxjs/toolkit';
import { withPayloadType } from '../../util';

export const getUsers: ActionCreatorWithoutPayload = createAction('[User] Gets Users');

export type GetUsers = ReturnType<typeof getUsers>;

export const getUsersSuccessful: ActionCreatorWithPayload<any[]> = createAction(
  '[User] Get Users Successful',
  withPayloadType<any[]>(),
);

export type GetUsersSuccessful = ReturnType<typeof getUsersSuccessful>;

export const getUsersError: ActionCreatorWithPayload<any> = createAction(
  '[User] Get Users Error',
  withPayloadType<any>(),
);

export type GetUsersError = ReturnType<typeof getUsersError>;
