import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware())
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// epicMiddleware.run(rootEpic);

ReactDOM.render(<App />, document.getElementById('root'));
