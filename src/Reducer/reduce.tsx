import { createSlice } from "@reduxjs/toolkit";
type Field = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
};
type Edit = {
  id: number;
  status: boolean;
};

type State = {
  fields: Field[];
  edit: Edit;
};

export const initialState: State = {
  fields: [],
  edit: {
    status: false,
    id: 0,
  },
};
const reducer = createSlice({
  name: "form",
  initialState,
  reducers: {
    addField: (state, action) => {
      state.fields.push(action.payload);
      return state;
    },
    updateField: (state, action) => {
      const { id, name, email, address, phone } = action.payload;
      const dataIndex = state.fields.findIndex((ele) => ele.id === id);

      if (dataIndex !== -1) {
        state.fields[dataIndex] = { id, name, email, address, phone };
      }
    },
    resetForm: (state, action) => {
      debugger
      state.fields = state.fields.filter((ele) => ele.id !== action.payload);
      return state;
    },
    setEdit: (state, action) => {
      state.edit.status = action.payload.status;
      state.edit.id = action.payload.id;
      return state;
    },
  },
});
export const { updateField, resetForm, addField, setEdit } = reducer.actions;
export default reducer.reducer;
