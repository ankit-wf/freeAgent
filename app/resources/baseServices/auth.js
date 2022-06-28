import {callApiGet, callApiPost} from './baseApi';
import API from '../../constants/baseApi';

export const postList = (data = {}) => callApiPost(API.POSTS, data);
export const postDetails = (data = {}) => callApiPost(API.POST_DETAILS, data);
export const categories = (data = {}) => callApiPost(API.CATEGORIES, data);
export const login = (data = {}) => callApiPost(API.LOGIN, data);
export const scoresDetails = (data = {}) => callApiGet(API.SCORES, data);
// export const podCasts = (data = {}) => callApiPost(API.PODCASTS, data);
