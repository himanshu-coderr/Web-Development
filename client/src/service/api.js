
//Client side APIs.

import axios from 'axios';

const url = 'http://localhost:8000';

export const createPost = async (post) => {
    try{
        return await axios.post(`${url}/create`,post)   // creating an api and attaching data to it. here data is post object.
    }
    catch(error){
        console.log('Error while calling createPost API ', error);
    }
}

export const getAllPosts = async() => {
    try{
        let response = await axios.get(`${url}/posts`);    // api for getting all the posts
        return response.data;
    }
    catch(error){
        console.log('Error while calling getAllPosts API -- ',error)
    }
}

export const getPost = async (id) => {
    try{
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    }
    catch(error){
        console.log('Error while calling getPost API', error)
    }
}

export const updatePost = async (id,post) => {
    try{
        return await axios.put(`${url}/update/${id}`, post)
    }
    catch(error){
        console.log('Error while calling updatePost API ', error)

    }
}
export const deletePost = async (id) => {
    try {
        return await axios.delete(`${url}/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deletePost API ', error)
    }
}
