import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';




function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/projects" />
      </Switch>
    </>
    
  );
}

export default App;