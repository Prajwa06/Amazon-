import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice';
import basketReducer from '../features/basketSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
  },
});
