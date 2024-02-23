import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk(
  'login/loginByUsername',
  async (authData: loginByUsernameProps, thunkApi) => {
    try {
      const response = await axios
        .post<User>('http://localhost:3000/login', authData, {
          headers: {
            Authorization: true
          }
        })
        .catch();

      if (!response.data) {
        throw new Error('Empty response data');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('error');
    }
  }
);
