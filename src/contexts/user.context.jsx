import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChange,
  createUserDocFromAuth,
} from "../utlis/firebase.utlis";

import { createAction } from "../utlis/reducer/reducer.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  console.log("dispatch", action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

const INITIAL_STATE = { currentUser: null };

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsub = onAuthStateChange((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
