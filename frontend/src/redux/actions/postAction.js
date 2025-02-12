import { useSelector } from 'react-redux';
import api from '../../utils/axiosConfig.js';
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure
} from '../slices/postSlice';

// Fetch all posts
export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(fetchPostsStart());
    const response = await api.get('http://localhost:3000/posts');
    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

// Fetch single post by ID
export const fetchPostById = (id) => async (dispatch) => {
  try {
    dispatch(fetchPostStart());
    const response = await api.get(`http://localhost:3000/posts/${id}`);
    dispatch(fetchPostSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostFailure(error.message));
  }
};

// Create new post
export const createPost = (postData) => async (dispatch) => {
  try {
    dispatch(createPostStart());
    const userEmail = useSelector((state) => state.auth.user.email);
    const response = await api.post('http://localhost:3000/posts', postData);
    dispatch(createPostSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(createPostFailure(error.message));
    alert(`Failed to create post ${error.message}`, );
  }
};
