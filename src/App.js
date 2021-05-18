import React from 'react';
import DashBoard from './Dashboard/DashBoard';
import Navi from './Components/Blocks/Navigation';
import './Static/css/App.css';
import SinglePost from './Blogs/SinglePost';
import Blog from './Blogs/Blog';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AuthorInfo from './Auth/AuthorInfo';
import Footer from './Components/Blocks/Footer';
import Welcome from './Home/Welcome';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navi />
          <Switch>
            <Route private path="/dashboard" component={DashBoard} />
            <Route exact path="/" component={Welcome} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/:postid" component={SinglePost} />
            <Route path="/author/anit kumar" component={AuthorInfo} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
