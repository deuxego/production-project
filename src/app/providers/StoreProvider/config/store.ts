import { userReducer } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { profileReducer } from 'entities/Profile';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loginForm: loginReducer,
    profile: profileReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
