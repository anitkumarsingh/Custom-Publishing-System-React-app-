import React from 'react';
import Mypic from './pic2.jpg';

const AuthorInfo = () =>{
    return(
        <div className="author-container">
                 <div className="pic-container">
                   <img  className="authorPic" src={Mypic}  width="150px" height="150px" alt="author" style={{borderRadius:'100%'}} />
                   </div>
                   <div className="info">
                        {/* <h3><b>About Author</b></h3> */}
                        <h3>Anit Kumar</h3>
                        <h5>Full Stack Developer</h5>
                        <h5>anikumarsingh99@gmail.com</h5>
                        {/* <p>I'm 2017 postgraduate MCA student from RNS Institute Of Technology, have worked as a Web Developer over 1 year. I enjoy developing elegant and functional user interfaces and full stack applications using both front-end and back-end JavaScript based technologies.</p> */}

                 </div>
              </div>
    )
}
export default AuthorInfo;