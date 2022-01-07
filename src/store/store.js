import { createStore, applyMiddleware  } from 'redux'
import {rootReducer} from "./reducers/rootReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
export const store = createStore(rootReducer,composedEnhancer)