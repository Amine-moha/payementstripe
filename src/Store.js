import { createStore} from "redux"
import { cartreduicer } from "./Reduicer";
export const store = createStore(
    cartreduicer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );