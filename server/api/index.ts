import {
    getUsers,
    getUser,
} from './users'
import {
    getPosts,
    getPost,
} from './posts'
import {
    getComments,
} from './comments'

export const apiGetUsers = getUsers;
export const apiGetUser = getUser;

export const apiGetPosts = getPosts;
export const apiGetPost = getPost;

export const apiGetComments = getComments;