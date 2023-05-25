import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './configureStore'

export interface taskListState {
  list: Task[],
}

const initialState: taskListState = {
  list: [],
}

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task['header']>) => {
      state.list.push({
        id: crypto.randomUUID(),
        header: action.payload,
        done: false,
      })
    },
    completeTask: (state, action: PayloadAction<Task['id']>) => {
        const task = state.list.find((x) => x.id === action.payload);

        if (task) {
            task.done = true;
        }
    },
    deleteTask: (state, action: PayloadAction<Task['id']>) => {
        state.list = state.list.filter((x) => x.id === action.payload);
    }

  },
})

export const {
    addTask,
    completeTask,
    deleteTask,
} = taskListSlice.actions

export default taskListSlice.reducer;

const tasksSelector = (state: RootState) => state.taskList;