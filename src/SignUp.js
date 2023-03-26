import React from "react";
import { auth } from './auth';


function SignUpForm() {
  const [state, setState] = React.useState({

    email: "",
    password: ""
  });

  function setErrorMsg(error) {
    return {
      registerError: error.message
    };
  }
  
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const {email, password } = state;

    auth(state.email, state.password).catch(evt =>
      this.setState(setErrorMsg(evt))
    );
    alert(
      `You are sign up with email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          
        </div>
        <span>or use your email for registration</span>
     
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
