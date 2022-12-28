import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
import {Helmet} from "react-helmet";

import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Successfully added');

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      address:'',
      users: []
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get('http://localhost:3000/users').then(res => this.setState({users: res.data}));
  }

  handleChange = (name) => event => {
    this.setState({ [name]: event.target.value });
  }
  
 

  handleSubmit = () => {
    axios.post('http://localhost:3000/users', {name: this.state.name, age: this.state.age, address: this.state.address})
      .then(this.setState({name: '', age: '',address: ''}))
      .then(() => this.getUsers());
      notify ()
  }

  handleEdit = (value) => {
    axios.put(`http://localhost:3000/users/${value.id}`, {name: value.name, age: value.age, address: value.address})

      .then(() => this.getUsers())
  }

  render() {
    return (
        
      <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Form Page    </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Toaster/>
        <form onSubmit={this.handleSubmit}>
          <div className="title">add user</div>
          <input placeholder="name" type="text" value={this.state.name} onChange={this.handleChange('name')}/>
          <input placeholder="age" type="text" value={this.state.age} onChange={this.handleChange('age')}/>
          <input placeholder="address" type="text" value={this.state.address} onChange={this.handleChange('address')}/>
          
          <div className="btn"  onClick={this.handleSubmit}>send</div>
    

        </form>

       
      </div>
    );
  }
}



export default Form;
