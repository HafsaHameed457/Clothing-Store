import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middlewares = [logger];

const composeMiddleWare = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeMiddleWare);
