import React from 'react'
import Post from './Post';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getAllPosts } from '../../service/api';

const decor = { textDecoration:'none',color: 'inherit'}
const Posts = () => {
    const [posts, setPosts] = useState([]);

    // let posts = [1,2,3,4,5,6,7]
    
    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    },[])
    
    return (
        
            posts.map((post) => (
                <Grid item lg={3} sm={4} xs={12}>
                    <Link to={`/details/${post._id}`} style={decor}>
                        <Post post={post}/> 
                    </Link>
                </Grid>
    
            ))
        

        
    )
}

export default Posts
