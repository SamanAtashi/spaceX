import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import missions from './missions/missions';
import rockets from './rockets/rockets';

// a place to put all reducers
const reducer = {
  missions,
  rockets,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  //   devTools: process.env.NODE_ENV !== 'production',
});

export default store;
