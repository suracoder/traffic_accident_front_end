import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from "redux" 
import thunk from  "redux-thunk"
import {Provider} from "react-redux";
import AllReducer from "./Reducer/index"
const store =createStore(AllReducer,applyMiddleware(thunk));
// const store = createStore(AllReducer , composeWithDevTools(
  // applyMiddleware(thunk),
  // other store enhancers if any
// ));
 
ReactDOM.render(
  <Provider store={store}>
  <Fragment> 
    <App />
    </Fragment>
    </Provider>
  ,       
  document.getElementById('root')
);  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
