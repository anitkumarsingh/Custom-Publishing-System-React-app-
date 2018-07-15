import React from 'react';
// import Signin from './SignIn';
import DashBoard from './Dashboard/DashBoard';
// import PublishedPost from './Dashboard/publishedPost';
import Navi from './Navigation';
import './App.css';
// import BlogPost from './Blog';
import SinglePost from './SinglePost';
// import Routes from './routes';
import Blog from './Blog';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
// import FullPost from './FullPost';
import AuthorInfo from './AuthorInfo';
import Footer from './Footer';
import Welcome from './Home/Welcome';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                  
                    <Navi />
                        <Switch>
                            <Route private path="/dashboard" component={DashBoard} />
                            <Route exact path="/" component={Welcome}/>
                            <Route   path="/blog" component={Blog} />
                            <Route   path="/post/:postid" component={SinglePost} />
                            <Route   path="/author/anit kumar" component={AuthorInfo} />
                        </Switch>
                    <Footer/>
                </div>
            </Router >
        );
    }
}
export default App;