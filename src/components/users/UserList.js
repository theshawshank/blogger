import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button, Card, ListGroup } from 'react-bootstrap';

class UserList extends React.Component{
    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data
            this.setState({users})
        })
    }

    render(){
        return (
            <div class='container' align='center'>

<Card bg="light" className="text-center" align='center' border="primary" style={{ width: '60rem'}}>
                <Card.Header className='font-weight-bold text-muted text-center display-4'>ALL USERS [{this.state.users.length}]</Card.Header>
                <ListGroup variant="flush">
                {this.state.users.map(user=>{
                    return (
                        <ListGroup.Item key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></ListGroup.Item>
                        )
                })}
  </ListGroup>
</Card>


                {/* <h2>USERS LIST:{this.state.users.length}</h2>

                <ul>
                    {this.state.users.map(user=>{
                        return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })}
                </ul> */}
            </div>
        )
    }
}

export default UserList