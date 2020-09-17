import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
 
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <div>
                    <header>
                        <nav>
                            <ul>
                                <li> <NavLink to="/" exact activeClassName="active">Home</NavLink> </li>
                                <li> <NavLink to="/new-post">New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>

                    {/* <Route 
                        path="/"
                        exact
                        render={() => <h1>HOME</h1>}
                    /> */}

                    <Route 
                        path="/"
                        exact
                        component={Posts}
                    />

                    <Route 
                        path="/new-post"
                        exact
                        component={NewPost}
                    />



                </div>

                {/* <Posts /> */}

            </div>
        );
    }
}

export default Blog;