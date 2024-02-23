import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
