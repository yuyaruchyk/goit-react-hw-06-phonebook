import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer';
import { contactListReducer } from './contactListReducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



const contactListPersistConfig = {
  key: 'contactList',
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: {
    contactList: persistReducer(contactListPersistConfig, contactListReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
