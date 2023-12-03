import { nanoid } from 'nanoid';



const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState = {
  contacts: [],
};

const contactListSlice = createSlice({
  name: 'contactsSlice',
  initialState: contactsInitialState,
  reducers: {
    addPhone: (state, action) => {
        const newContact = {
        id: nanoid(),
        ...action.payload,
      };
      const contactExists = state.contacts.some(
        contact => contact.name === newContact.name
      );

      if (contactExists) {
        alert('Contact with the same number already exists!');
      } else {
        state.contacts.push(newContact);
      }
    },

    setPhone: (state, action) => {
      state.contacts = action.payload;
    },

    deletePhone: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },
  },
});

export const { setPhone, addPhone, deletePhone } = contactListSlice.actions;
export const contactListReducer = contactListSlice.reducer;
