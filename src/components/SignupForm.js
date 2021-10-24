import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewEmp } from '../allactions';
import { strValidation } from './strvalidation';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            confromemail: '',
            confromPassword: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validation = () => {

        let userNameError = "";
        let emailError = "";
        let confromemailError = "";
        let confromPasswordError = "";
        let passwordError = "";
        let result = true;


        if (this.state.userName === "" || !strValidation.onlyAlpha(this.state.userName)) {
            userNameError = "*Please Enter Correct User Name"
            result = false
        }

        if (this.state.confromemail !== this.state.email || this.state.confromemail === "") {
            confromemailError = "*Please Enter Correct Confirm Email ID"
            result = false

        }

        if (!strValidation.emailId(this.state.email) || this.state.email === "") {
            emailError = "*Please Enter Email ID"
            result = false

        }

        if (!strValidation.passwordpattern(this.state.password) || this.state.password === "") {
            passwordError = "*least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            result = false

        }

        if (this.state.confromPassword !== this.state.password || this.state.confromPassword === "") {
            confromPasswordError = "*Please Enter Correct Confirm Password"
            result = false

        }

        if (userNameError || emailError || confromemailError || passwordError || confromPasswordError) {
            this.setState({ userNameError, emailError, confromemailError, passwordError, confromPasswordError })
            result = false;
        }

        return result;

    }

    handleSubmit() {
        if (this.validation()) {
            let formdata = {
                userName: this.state.userName,
                confromemail: this.state.confromemail,
                email: this.state.email,
                confromPassword: this.state.confromPassword,
                password: this.state.password

            };
            this.props.addNewEmp(formdata);
            console.log("submitted", formdata);
            this.setState({
                userName: '',
                email: '',
                confromemail: '',
                confromPassword: '',
                password: '',

                userNameError: "",
                emailError: "",
                confromemailError: "",
                confromPasswordError: "",
                passwordError: "",
            });
        }
    }
    render() {
        return (
            <div className="col-md-4 offset-md-4">
                <Form>
                    <h2 style={{ "textAlign": "center", "marginTop": "20px" }}>Enter User registration</h2>
                    <hr />
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            type="text"
                            name="userName"
                            placeholder="userName"
                            onChange={e => {
                                this.setState({ [e.target.name]: e.target.value });
                            }}
                            value={this.state.userName}
                        />
                        <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.userNameError}</span>
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            type="text"
                            name="email"
                            placeholder="Email-Id"
                            onChange={e => {
                                this.setState({ [e.target.name]: e.target.value });
                            }}
                            value={this.state.email}
                        />
                        <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.emailError}</span>
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Confirm Email</FormLabel>
                        <FormControl
                            type="text"
                            name="confromemail"
                            placeholder="Confirm Email"
                            onChange={e => {
                                this.setState({ [e.target.name]: e.target.value });
                            }}
                            value={this.state.confromemail}
                        />
                        <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.confromemailError}</span>

                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => {
                                this.setState({ [e.target.name]: e.target.value });
                            }}
                            value={this.state.password}
                        />
                        <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.passwordError}</span>

                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl
                            type="password"
                            name="confromPassword"
                            placeholder="Confirm Password"
                            onChange={e => {
                                this.setState({ [e.target.name]: e.target.value });
                            }}
                            value={this.state.confromPassword}
                        />
                        <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.confromPasswordError}</span>
                    </FormGroup>
                    <Button className="float-right" onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addNewEmp }, dispatch)
}
export default connect(null, mapDispatchToProps)(SignupForm)