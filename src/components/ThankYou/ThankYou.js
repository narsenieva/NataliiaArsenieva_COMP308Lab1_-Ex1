import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import Comment from '../Comment/Comment';
import '../Form.css';

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
        <div className="form-wrapper">
          <h1>Thank You!</h1>
          <div className="thankYouBox">
            <label>
              <p>Email: {email}</p>   
              <p>Comment: {comment}</p>   
            </label>
          </div>
        </div>
      )
    }
    