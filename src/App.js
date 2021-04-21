import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
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
        <Route component={Projects} path="/projects" />
        <Route component={TestNav} path="/testnav" />

      </Switch>
    </>
    
  );
}

export default App;
