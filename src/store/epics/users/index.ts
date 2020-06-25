import { GetUsers, GetUsersError, GetUsersSuccessful } from '../../actions/users/getUsers';

export type GetUserActionsOuput = GetUsersSuccessful | GetUsersError;

export type GetUserActionsInput = GetUsers | GetUserActionsOuput;

// export const getUsers$: Epic<GetUserActionsInput, GetUserActionsOuput, RootState> = action$ =>
//   action$.pipe(filter(getUsers.match),
//   switchMap());
