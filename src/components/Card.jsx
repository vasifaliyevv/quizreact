import React, { Component } from 'react';
import axios from 'axios';
import './card.css'


class Card extends Component {
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
  
  handleRemove = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => this.getUsers());
  }



  
  render() {
    return(
    <ul className="list">
    {this.state.users.length > 0 ? this.state.users.map((x, i) => 
      <User key={i} user={x} remove={() => this.handleRemove(x.id)} edit={this.handleEdit}/>
      // <li className="item" key={i}>
      //   <input value={x.name} disabled/>
      //   <input value={x.age} disabled/>
      //   <div className="btn-edit" onClick={this.handleEdit}>edit</div>
      //   <div className="btn-remove" onClick={() => this.handleRemove(x.id)}>remove</div>
      // </li>
    ) : <div>add some users</div>}          
  </ul>

  );
}
}
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      name: this.props.user.name,
      age: this.props.user.age,
      address:this.props.user.address,
      id: this.props.user.id
    }
  }

  handleEdit = () => {
    this.setState({
      disabled: false
    }) 
  }

  handleChange = (name) => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    this.setState({
      disabled: true
    }) 
    return {id: this.props.user.id, name: this.state.name, age: this.state.age,address: this.state.address};
  }

  render(){
    const {disabled, name, age,address,id} = this.state;
    return (
     
      <li className="item">
        <input value={name} disabled={disabled}  onChange={this.handleChange('name')}></input>
        <input value={age} disabled={disabled}  onChange={this.handleChange('age')}/>
        <input value={address} disabled={disabled}  onChange={this.handleChange('address')}/>
        
        <div className="btn-remove" onClick={this.props.remove}>remove</div>
      </li>

    )
  }
}


export default Card;
