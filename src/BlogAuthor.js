import React from 'react';
import Mypic from './pic2.jpg';
// import './BlogAuthor.css';
import {Link } from 'react-router-dom';

const BlogAuthor = (props) =>{
    
    return(
        <div className="blog__author">
        <Link to href="/author/anit-kumar" style={{float:'left'}}>
            <div className="blog__author-image" ><img src={Mypic} alt="autho" width="36px" height="auto" style={{borderRadius:'100px'}}/></div>
        </Link>
            <div class="blog__author-title"> By <Link  to="/author/anit kumar">{props.author}</Link> on {props.date}</div>
            <div class="clearfix"></div>
        </div>
    )
}
export default BlogAuthor;