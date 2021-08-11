import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props){
    super(props)
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }

  onChangeEmail(e){
    this.setState({email: e.target.value})
  }

  onChangePassword(e){
    this.setState({password: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()

    const userObject = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:9000/register', userObject).then((res)=>{
      console.log(res.data)
    }).catch((error)=>{
      console.log(error)
    });

    this.setState({email:'', password:''})
  }

  render(){
    return(
      <div className="wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter your Email</label>
            <input type="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" />
          </div>
          <div className="form-group">
            <label>Enter your Password</label>
            <input type="text" value={this.state.email} onChange={this.onChangePassword} className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit details" className="btn btn-success btn-block" />
          </div>
        </form>
      </div>
    )
  }
}