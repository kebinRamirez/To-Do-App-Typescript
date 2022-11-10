import {createSlice} from '@reduxjs/toolkit';

export type taskState = {
  id: number;
  title: string;
  deadline: string;
  startTime: string;
  endTime: string;
  remind: string;
  repeat: string;
  completed: boolean;
};

type stateT = {
  task: {
    taskCompleted: taskState[];
    task: taskState[];
  };
};

interface task {
  taskCompleted: taskState[];
  task: taskState[];
}

const initialState: task = {
  task: [],
  taskCompleted: [],
};

export const taskSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    create: (state, action: {payload: taskState}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.task.push(action.payload);
      state.task.sort((a,b)=> b.id -a.id)
    },
    complete: (state, action: {payload: number}) => {
      var arr: taskState[] = [];
      state.task.map(item => {
        if (item.id === action.payload) {
          const ob = {
            ...item,
            completed: true,
          };
          state.taskCompleted.push(ob);
        } else {
          arr.push(item);
        }
      });
      state.task = arr;
      state.taskCompleted.sort((a,b)=> b.id -a.id)
    },
    uncomplete: (state, action: {payload: number}) => {
      var arr: taskState[] = [];
      state.taskCompleted.map(item => {
        if (item.id === action.payload) {
          const ob = {
            ...item,
            completed: false,
          };
          state.task.push(ob);
        } else {
          arr.push(item);
        }
      });
      state.taskCompleted = arr;
      state.task.sort((a,b)=> b.id -a.id)
    },
    starting:(state, action: {payload: {tasks: taskState[], tasksCompleted: taskState[]}})=>{
      state.task= action.payload.tasks
      state.taskCompleted= action.payload.tasksCompleted
    }
  },
});

// Action creators are generated for each case reducer function
export const {create, complete, uncomplete, starting} = taskSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const taksList = (state: stateT) => state.task;

export default taskSlice.reducer;
