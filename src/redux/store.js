import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer';
import { contactListReducer } from './contactListReducer';

export const store = configureStore(
    {
        reducer: {
            contactList: contactListReducer,
            filter: filterReducer

        }
    }
)