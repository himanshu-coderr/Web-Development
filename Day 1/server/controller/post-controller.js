import { request, response } from "express";
import Post from "../schema/post-schema.js";
// import post from "../schema/post-schema.js";


export const createPost = async (request, response) => {
    console.log(request.body);
    try{
        let post = await new Post(request.body);
        post.save();

        response.status(200).json('blog saved sucessfully');
    } catch(error){
        response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    try{
        let posts = await Post.find({})   // getting all the posts
        response.status(200).json(posts);
    } catch(error){
        response.status(500).json(error);
    }
}


export const getPost = async (request, response) => {
    try{
        let post = await Post.findById(request.params.id);
        response.status(200).json(post);
    }
    catch(error){
        response.status(500).json(error);
    }
}

export const updatePost = async( request, response) => {
    try{
        // const post = await Post.findById(request.params.id);
        await Post.findByIdAndUpdate(request.params.id, { $set: request.body}) // $set $push $addToSet
        response.status(200).json('post updated successfully');
    }
    catch(error){
        response.status(500).json(error)

    }
}

export const deletePost = async (request, response) => {
    try {
        let post = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}