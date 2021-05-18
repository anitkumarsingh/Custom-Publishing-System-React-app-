import React from 'react';
import { post } from './data';
// import { Table } from 'react-bootstrap';

class PublishedPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: post
    };
  }
  render() {
    return (
      <div className="list-group">
        {this.state.posts.map(function (post, index) {
          return (
            <a href="#" key={index} className="list-group-item active">
              <h4 className="list-group-item-heading">{post.title}</h4>
              <p className="list-group-item-text">{post.body}</p>
            </a>
          );
        })}
      </div>
    );
  }
}
export default PublishedPost;
