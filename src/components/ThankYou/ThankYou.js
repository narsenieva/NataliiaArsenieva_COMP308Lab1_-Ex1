import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import Comment from '../Comment/Comment';
import './ThankYou.css';

export default function ThankYou(props) {
    const [email, setEmail] = useState();
    const comment = props.location.state;
  
    useEffect(() => {
        const loggedInUser = auth.getToken();
        if (loggedInUser!=="") {
          setEmail(loggedInUser);
        }
    },[]);
    
    return( 
        <div className="comment-wrapper">
        <h1>Enter Your Comments</h1>
        <label>
            <p>Email: {email}</p>   
            <p>Comment: {comment}</p>   
        </label>
        <label>
        </label>
        </div>
      )
    }
    