import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { ListGroup, Card } from 'react-bootstrap';

class UserPostList extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: [],
            user: {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            const posts = response.data
            this.setState({ posts })
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user = response.data
            this.setState({ user })
        })
        .catch((err)=>{
            console.log(err)
        })


    }

    

    render(){
        return (
            <div class='container' align='center'>
                {/* <h1 class='display-6 text-uppercase text-primary font-weight-light text-center'>{this.state.user.name}'s Posts</h1> */}

                <Card bg="light" className="text-center" align='center' border="primary" style={{ width: '60rem'}}>
                <Card.Header className='font-weight-bold text-muted text-center display-4'>{this.state.user.name}'s Posts</Card.Header>
                <ListGroup variant="flush">
                {this.state.posts.map(post=>{
                    return (
                        <ListGroup.Item key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroup.Item>
                        )
                })}
  </ListGroup>
</Card>

                {/* <ul>
                {this.state.posts.map(post=>{
                    return (
                        <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    )
                })}
                </ul> */}
            </div>
        )
    }
}

export default UserPostList