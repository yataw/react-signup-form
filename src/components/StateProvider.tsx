import * as React from 'react';

export const SIGNUP_START = 'SIGNUP/START';
export const SIGNUP_SUCCESS = 'SIGNUP/SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP/FAIL';

const initialState = {
  error: null,
  userName: 'Guest',
};

type Action = any;

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case SIGNUP_START:
    case SIGNUP_SUCCESS:
    case SIGNUP_FAIL:
    default:
      return state;
  }
}

const StateContext = React.createContext([]);

export const StateProvider = ({ children }) => {
  const stateProviderValue = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={stateProviderValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useContextState = () => React.useContext(StateContext);
