import { configureStore } from '@reduxjs/toolkit';

import { contactListReducer } from './contactListReducer';

export const store = configureStore(
    {
        reducer: {
             contactList: contactListReducer

        }
    }
)