import axios from 'axios';
import { setup } from 'axios-cache-adapter'
const API = setup({
  
  baseURL: 'https://hookbackengine-83x1d8mid-i0ty98uytu.vercel.app/',
  cache: {
    maxAge: 40 * 60 * 1000, // 2 min instead of 15 min
    exclude: { query: false }
  }
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const userStatus = (id, userStatus) => API.patch(`/user/${id}`, userStatus);
export const userImg = (id, userImg) => API.patch(`/user/${id}/img`, userImg);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const fetchUser = (id) => API.get(`/user/${id}`);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);