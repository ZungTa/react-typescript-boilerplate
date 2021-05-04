import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type RootState = {
  count: number; // Sample State
  projectName: string; // Sample State
};

const initialRootState: RootState = {
  count: 0, // Sample State
  projectName: 'project', // Sample State
};

type RootAction =
  | { type: 'defaultType' }
  | { type: 'setCount'; newCount: number } // Sample Action
  | { type: 'setProjectName'; newProjectName: string }; // Sample Action
type RootDispatch = Dispatch<RootAction>;

function rootReducer(state: RootState, action: RootAction): RootState {
  switch (action.type) {
    case 'defaultType':
      return state;
    case 'setCount': // Sample Reducer
      state.count = action.newCount;
      return {
        ...state,
        count: action.newCount,
      };
    case 'setProjectName': // Sample Reducer
      return {
        ...state,
        projectName: action.newProjectName,
      };
    default:
      return state;
  }
}

// default value를 주니까 null check를 할 필요가 없다.
const RootStateContext = createContext<RootState>(initialRootState);
const RootDispatchContext = createContext<RootDispatch>(() => null);

export function RootStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(rootReducer, initialRootState);
  return (
    <RootStateContext.Provider value={state}>
      <RootDispatchContext.Provider value={dispatch}>
        {children}
      </RootDispatchContext.Provider>
    </RootStateContext.Provider>
  );
}

export function useRootState(): RootState {
  return useContext(RootStateContext);
}

export function useRootDispatch(): RootDispatch {
  return useContext(RootDispatchContext);
}
