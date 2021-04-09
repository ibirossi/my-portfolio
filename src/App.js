import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NavBar from './components/NavBar';
import MockHome from './components/MockHome';
import MockCard from './components/MockCard'




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
        <Route component={MockHome} path="/mock" />
        <Route component={MockCard} path="/mockcard" />
      </Switch>
    </>
    
  );
}

export default App;
