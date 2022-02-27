import React from "react";
import { Navigate } from "react-router-dom";
import FormInput from "../form-input/FormInput.component";
import Button from '../button/Button.component';

// import { signInWithGoogle } from '../../firebase/firebase.utils';
// import './sign-in.style.scss';
import "./admin-login.styles.css"

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      auth: false
    };
  };


  handleSubmit = event => {
    event.preventDefault();
    let emails = ["yanadragomir@mail.ru", "oh.eldarkaa@gmail.com"]
    let pass = "dragomir2409";

    if (emails.includes(this.state.email) && this.state.password === pass){
        this.setState({ auth: true});
    } else {
      this.setState({ auth: false});
      alert("Вы не админ!");
      return;
    }

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            autoComplete='true'
            required
          />
          <div className='buttons'>
            <Button type='submit'> Sign in </Button>
            {
             this.state.auth ? <Navigate to="podcast"  /> : null
            }
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn> */}
              {/* Sign in with Google
            </CustomButton> */}
          </div>
        </form>
      </div>
    );
  }
}

export default AdminLogin;