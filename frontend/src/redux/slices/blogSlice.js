import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    createSuccess: false
  },
  reducers: {
    // Fetch all posts
    fetchPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.error = null;
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Fetch single post
    fetchPostStart: (state) => {
      state.loading = true;
      state.error = null;
      state.currentPost = null;
    },
    fetchPostSuccess: (state, action) => {
      state.loading = false;
      state.currentPost = action.payload;
      state.error = null;
    },
    fetchPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create post
    createPostStart: (state) => {
      state.loading = true;
      state.error = null;
      state.createSuccess = false;
    },
    createPostSuccess: (state, action) => {
      state.loading = false;
      state.posts.unshift(action.payload);
      state.error = null;
      state.createSuccess = true;
    },
    createPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.createSuccess = false;
    },
    resetCreateSuccess: (state) => {
      state.createSuccess = false;
    }
  }
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure,
  resetCreateSuccess
} = postSlice.actions;

export default postSlice.reducer;