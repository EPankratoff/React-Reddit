import { ActionCreator, AnyAction } from 'redux';

export const updateComment: ActionCreator<AnyAction> = (payload) => ({
  type: 'UPDATE_COMMENT',
  payload
});

export const setToken: ActionCreator<AnyAction> = (payload) => ({
  type: 'SET_TOKEN',
  payload
})