import React, { useState }  from 'react';
import './Login.css';

export default function Login (props){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = e => {
        e.preventDefault();
        props.history.push('/comment');}
    return(
            <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Email</p>
              <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          </div>
        )
}