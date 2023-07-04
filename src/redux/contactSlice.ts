// Assuming you have a `contactSlice` that looks something like this
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Contact = {
    id: string;
    name: string;
    email: string;
  };
  
  
  interface ContactState {
    contacts: Contact[];
  }
  
  const initialState: ContactState = {
    contacts: [],
  };

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, name, email } = action.payload;
      const contact = state.contacts.find((contact) => contact.id === id);
      if (contact) {
        contact.name = name;
        contact.email = email;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;