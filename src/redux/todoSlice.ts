import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ItemType {
  id: number;
  name: string;
  checked: boolean;
}

interface StateItems {
  items: ItemType[];
}

const initialState: StateItems = {
  items: [],
};

const todoSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ItemType>) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    changeTodo: (state, action: PayloadAction<ItemType>) => {
      state.items = state.items.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, checked: action.payload.checked, id: Date.now() }
          : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
