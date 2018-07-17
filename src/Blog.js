import React, { Component } from 'react';
// import {post} from './Dashboard/data';
import axios from './axios';
// import SinglePost from './SinglePost';
// import { Router} from 'react-router';
import BlogAuthor from './BlogAuthor';
import {Redirect} from 'react-router-dom';
import {Link } from 'react-router-dom';
import swal from 'sweetalert';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null,
            error: false,
            name:'',
            redirect: false,
        }

        // console.log(props.match, props.params)
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 20);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Anit Kumar ',
                        date: 'July 12th 2018'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });
            
            // Preventing logout users not to access and sumbmission
            let data = JSON.parse(sessionStorage.getItem('userData'));
            if(data){
                console.log(data.name);
                this.setState({name: data.name});
            }
            else{
                //  alert("You first need to Login");
                 swal("Please Login first !", "You need to first Login to access content!", "error");
            }
    }
    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }
    render() {
        // Preventing logout users not to access and sumbmission
        if(!sessionStorage.getItem('userData') || this.state.redirect){
            return (<Redirect to={'/'}/>)
          }

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                // return <tr key={post.id} className="table-box">
                //     <div style={{ paddingLeft: '35px', paddingBottom: '30px' }}>
                //         <Link to={`/post/${post.id}`}><h3>{post.title} </h3></Link>
                //         {/* <span style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}>Posted on <span style={{ paddingLeft: '5px', fontWeight: 'bold' }}>{post.date}</span> <span style={{ color: 'grey', paddingLeft: '50px' }}>By</span>  - <b>{post.author}</b></span> */}
                //         <BlogAuthor date={post.date} author={post.author} />
                //     </div>
                // </tr>
                return(
                    <div className="author-container">
                               <div className="info">
                               <Link to={`/post/${post.id}`}><h2>{post.title} </h2></Link>
                               <BlogAuthor date={post.date} author={post.author} />
                             </div>
                          </div>
                )
            });
        }
        return (
            <div className="container">
                <table className="table table-striped">
                    <tbody>
                        {posts}
                    </tbody>
                </table>
                
            </div>
        );
    }
}
export default BlogPost;