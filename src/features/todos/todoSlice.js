import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: Date.now(),
                text: action.payload
            }
        }
    }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer