import { createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    }
  }, 

  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })

    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.error = undefined;
      state.isLoading = false;
    })

    builder.addCase(loginByUsername.rejected, (state) => {
      state.error = 'Incorrectly entered data';
      state.isLoading = false;
    })
  }
});

export const { reducer: loginReducer } = loginSlice;
export const { actions: loginActions } = loginSlice;
