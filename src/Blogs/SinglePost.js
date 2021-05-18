import React from 'react';
import '../Static/css/SinglePost.css';
import MySketch from '../Static/Images/4 copy.jpg';
import axios from 'axios';
import AuthorInfo from '../Auth/AuthorInfo';

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null,
      postId: props.match.params.postid,
      author: 'Anit Kumar',
      Date: 'July 12th 2018'
    };
  }
  componentDidMount() {
    if (this.state.postId) {
      console.log('fetchinng', this.state.postId);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
        .then((response) => {
          console.log(response);
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
    if (this.state.loadedPost == null) return <p>Loading</p>;
    if (this.state.loadedPost) {
      post = (
        // <div className="FullPost">
        //     <h1>{this.state.loadedPost.title}</h1>
        //     <p>{this.state.loadedPost.body}</p>
        // </div>
        <div className="container">
          <header>
            <h1>{this.state.loadedPost.title}</h1>
            <p>
              {' '}
              <span style={{ display: 'flex' }}>
                Posted on
                <span style={{ paddingLeft: '5px', fontWeight: 'bold' }}>
                  {this.state.Date}
                </span>
                <span style={{ color: 'grey', paddingLeft: '50px' }}>By</span>-{' '}
                <b>{this.state.author}</b>
              </span>
            </p>
            <img src={MySketch} width="100%" height="auto" alt="post1" />
          </header>
          <div class="post-body">
            <h2>
              <span style={{ fontWeight: '400' }}>
                {this.state.loadedPost.title}
              </span>
            </h2>
            <p>
              <span style={{ fontWeight: '400', fontSize: '20px' }}>
                {this.state.loadedPost.body}
              </span>
            </p>
            <p>
              <span style={{ fontWeight: '400' }}></span>
            </p>
          </div>
          <AuthorInfo />
        </div>
      );
    }
    return post;
  }
}
export default SinglePost;
