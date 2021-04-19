import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NavBar from './components/NavBar';
import MockCard from './components/MockCard';
import TestNav from './components/TestNav';




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
        <Route component={MockCard} path="/mockcard" />
        <Route component={TestNav} path="/testnav" />

      </Switch>
    </>
    
  );
}

export default App;
