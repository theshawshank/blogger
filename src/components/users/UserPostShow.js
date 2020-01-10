import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button, Card } from 'react-bootstrap';

class UserPostShow extends React.Component{
    constructor(){
        super()
        this.state = {
            post: {},
            user: {},
            comments: []
        }
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then((response)=>{
            const post = response.data
            axios.get(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response)=>{
                const user = response.data
                this.setState({ user })
            })
            this.setState({ post })
        }
        )

        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`)
        .then((response)=>{
            const comments = response.data
            this.setState({ comments })
        })

    }

    render(){
        console.log(this.state.user.name)
        return (
            <div class='container' align='center'>

<Card bg="light" className="text-center" align='center' border="primary" style={{ width: '60rem'}}>
  
  <Card.Body>
    <Card.Title className='text-uppercase display-5 font-weight-bold'>{this.state.post.title}</Card.Title>
    <Card.Text>
    {this.state.post.body}
    </Card.Text>
  </Card.Body>
  <Card.Header className='font-weight-bold text-center text-muted display-5'>{this.state.user.name}&nbsp;&nbsp;<small>[{this.state.user.email}]</small>&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="outline-primary" className='text-white' size="sm"><Link to={`/users/${this.state.post.userId}`}>More Posts from {this.state.user.name} </Link></Button></Card.Header>
  <h5 className="text-center">COMMENTS</h5>
                <ul>
                    {this.state.comments.map(comment=>{
                        return (<li key={comment.id} className='text-left text-muted'>{comment.body}</li>)
                    })}
                </ul>
                
</Card>
<br/>

{/* 
                <h5 class='text-uppercase font-weight-bold'>&nbsp;&nbsp;{this.state.post.title}</h5>
                <h6 class='text-muted text-center'>&nbsp;&nbsp;&nbsp;{this.state.user.name} &nbsp; <small class='font-weight-light'> {this.state.user.email}</small></h6>
                
                <h4 class='text-lowercase font-weight-light'>&nbsp;&nbsp;&nbsp; {this.state.post.body}</h4> 
                <hr/>
                <h2>COMMENTS</h2>
                <ul>
                    {this.state.comments.map(comment=>{
                        return (<li key={comment.id}>{comment.body}</li>)
                    })}
                </ul>
                <hr/>
*/}
            </div>
        )
    }
}

export default UserPostShow