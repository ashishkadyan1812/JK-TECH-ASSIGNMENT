import {configureStore} from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
	reducer: {
		post: postReducer,
		auth: authReducer
	},
});

export default store;