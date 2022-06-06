 import {
    combineReducers,
    compose,
    applyMiddleware,
    legacy_createStore as createStore,
  } from "redux";
  import thunk from "redux-thunk";
  import { authReducer } from "./auth/reducer";
  import { dataReducer } from "./app/reducer"
  
  const reducer = combineReducers({
    isAuth: authReducer,
    data:dataReducer
  });
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
         
        })
      : compose;
  
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    
  );
  export const store = createStore(reducer, enhancer);