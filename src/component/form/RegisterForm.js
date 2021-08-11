import React, { Component } from 'react';
import { Customized } from "../customized/customized";
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRegno = this.onChangeRegno.bind(this);
    this.onChangeUniversity = this.onChangeUniversity.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeIntern = this.onChangeIntern.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      regno: '',
      university: '',
      course: '',
      intern: '',
      gender: '',
    }
  }

  onChangeName(e){
    this.setState({name: e.target.value})
  }
  onChangeRegno(e){
    this.setState({regno: e.target.value})
  }
  onChangeUniversity(e){
    this.setState({university: e.target.value})
  }
  onChangeCourse(e){
    this.setState({course: e.target.value})
  }
  onChangeIntern(e){
    this.setState({intern: e.target.value})
  }
  onChangeGender(e){
    this.setState({WebGLRenderingContext: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()

    const userObject = {
      name: this.state.name,
      regno: this.state.regno,
      university: this.state.university,
      course: this.state.course,
      intern: this.state.intern,
      gender: this.state.gender,
    };

    axios.post('http://localhost:9000/register-form', userObject).then((res)=>{
      console.log(res.data)
    }).catch((error)=>{
      console.log(error)
    });

    this.setState({name:'', regno:'', university:'', course:'', intern:'', gender:''})
  }

  render(){
    return(
      <div className="wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter your Full Name</label>
            <input type="text" value={this.state.name} onChange={this.onChangeName} className="form-control" />
          </div>
          <div className="form-group">
            <label>Enter your Registration Number</label>
            <input type="text" value={this.state.regno} onChange={this.onChangeRegno} className="form-control" />
          </div>
          <div className="form-group">
            <label>Enter your University</label>
            <input type="text" value={this.state.university} onChange={this.onChangeUniversity} className="form-control" />
          </div>
          <div className="form-group">
            <label>Enter your Course</label>
            <input type="text" value={this.state.course} onChange={this.onChangeCourse} className="form-control" />
          </div>
          <div className="form-group">
            <label>Enter your Internship course</label>
            <input type="text" value={this.state.intern} onChange={this.onChangeIntern} className="form-control" />
          </div>
          <div className="form-group">
            <Customized.RadioGroup
              value={this.state.gender}
              name="gender"
              label="Gender"
              onChange={this.onChangeGender}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit details" className="btn btn-success btn-block" />
            <br />
          </div>
        </form>
      </div>
    )
  }
}