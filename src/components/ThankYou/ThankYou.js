import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import Comment from '../Comment/Comment';
import '../Form.css';

export default function ThankYou(props) {
    const [email, setEmail] = useState();
    const comment = props.location.state.comment;
    const courseCode = props.location.state.courseCode;
    const courseName = props.location.state.courseName;
    const professor = props.location.state.professor;

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
              <p>You left a comment about {professor} who teaches {courseCode} - ({courseName}) course.</p>  
              <p>--------------------------</p>   
              <p>Email: {email}</p>   
              <p>Comment: {comment}</p>   
            </label>
          </div>
        </div>
      )
    }
    