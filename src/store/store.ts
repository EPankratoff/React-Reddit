import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

export interface IState {
  token: string;
  commentText: string;
}

const defaultState: IState = {
  token: '',
  commentText: ''
}

const reducer = (state: IState = defaultState, action: any): IState => {
  switch (action.type) {
    case 'SET_TOKEN': 
      return {...state, token: action.payload}
    case 'UPDATE_COMMENT':
      return {...state, commentText: action.payload}
    default: 
      return state
  }
};

export const store = createStore(reducer, composeWithDevTools())