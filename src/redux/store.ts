import { legacy_createStore as createStore, applyMiddleware} from "redux";
import { rootReducer } from './reducers'
import thunk from "redux-thunk";

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch