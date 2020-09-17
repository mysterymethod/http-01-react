import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
 
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <div>
                    <header>
                        <nav>
                            <ul>
                                <li> <NavLink to="/posts" exact activeClassName="active">Home</NavLink> </li>
                                <li> <NavLink to="/new-post">New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>

                    {/* <Route 
                        path="/"
                        exact
                        render={() => <h1>HOME</h1>}
                    /> */}

                    <Switch>  //Please only load one route which matches first.
                        <Route 
                            path="/new-post"
                            
                            component={NewPost}
                        />

                        <Route 
                            path="/posts"
                            component={Posts}
                        />
                    </Switch>

                    



                </div>
            </div>
        );
    }
}

export default Blog;