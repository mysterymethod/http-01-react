import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    componentDidMount () {

        // console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts#')
            .then( response => {
                const posts = response.data.slice(0,4);
                const updatedPost = posts.map( post => {
                    return {
                        ...post,
                        author: 'Pranoy'
                    }
                });

                this.setState({posts: updatedPost})
            });
    }


    render () {

        const posts = this.state.posts.map( post => {
            return (
                <Post
                    key = {post.id}
                    title = {post.title} 
                    author = {post.author}
                    clicked = {() => this.postSelectedHandler(post.id)}
                />
            )
        });

        return (
            <section className="Posts"> 
                {posts}
            </section>
        );
    }
}


export default Posts;