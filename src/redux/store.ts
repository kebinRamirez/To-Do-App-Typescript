import {configureStore} from '@reduxjs/toolkit';
import taskReducer  from './features/CreateATask';

export default configureStore({
  reducer: {
    task: taskReducer
  },
});
