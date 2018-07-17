import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';


class FullPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadedPost: null,
            postId: props.match.params.postid
        }
    }
    componentDidMount() {
        if (this.state.postId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
                .then(response => {
                    this.setState({ loadedPost: response.data });
                });
        }
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }

        if (!this.state.postId) return post;
        if (this.state.loadedPost == null) return <p>Loading</p>
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;