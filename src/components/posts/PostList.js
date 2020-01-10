import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card, ListGroup} from 'react-bootstrap'

class PostList extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts = response.data
            this.setState({posts})
        })
    }

    render(){
        return (
            <div class='container' align='center'>

            <Card bg="light" className="text-center" align='center' border="primary" style={{ width: '60rem'}}>
                            <Card.Header className='font-weight-bold text-muted text-center display-4'>ALL POSTS [{this.state.posts.length}]</Card.Header>
                            <ListGroup variant="flush">
                            {this.state.posts.map(post=>{
                                return (
                                    <ListGroup.Item key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroup.Item>
                                    )
                            })}
              </ListGroup>
            </Card>
                {/* <h2 class='display-4 text-muted'>ALL POSTS <small> [{this.state.posts.length}]</small></h2>

                <ul>
                    {this.state.posts.map(post=>{
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul> */}
                <br />
                <br />
            </div>
        )
    }
}

export default PostList