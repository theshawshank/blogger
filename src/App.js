import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import './App.css'
import logo from './img/logo.svg'

import HomeComponent from './Home'
import UserList from './components/users/UserList'
import UserPostShow from './components/users/UserPostShow'
import UserPost from './components/users/UserPost'
import PostList from './components/posts/PostList'


function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/" >
      <Link to='/'><img src={logo}
                  width="40"
                  height="40"
                  style={{width:100}} /></Link>
      BLOG
      </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/users">Users</Nav.Link>
      <Nav.Link href="/posts">Posts</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />

      
{/* <Button variant="outline-info" class='text-white'><Link to="/">Home</Link></Button>
<Button variant="outline-info"><Link to="/users"> Users</Link></Button>
<Button variant="outline-info"><Link to="/posts"> Posts</Link></Button> */}


        <Route path="/" component={HomeComponent} />
        <Route path="/users/" component={UserList} exact={true} />
        <Route path="/users/:id" component={UserPost} />
        <Route path="/posts/:id" component={UserPostShow} />
        <Route path="/posts/" component={PostList} exact={true} />


      </div>
    </BrowserRouter>
  );
}

export default App;
