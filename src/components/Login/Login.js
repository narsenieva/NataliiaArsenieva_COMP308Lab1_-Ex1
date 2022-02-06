import React, { useState }  from 'react';
import '../Form.css';
import auth  from '../../auth/auth';


export default function Login (props){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = e => {
        e.preventDefault();
        if (email!= '' || password){
            auth.onAuthentication();
            auth.saveToken(email);
            props.history.push('/comment');
        }
      
    }
    return(
      <div className="form-wrapper">
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
          <button className = "btnSubmit" type="submit">Submit</button>
        </div>
      </form>
      </div>

        )
}