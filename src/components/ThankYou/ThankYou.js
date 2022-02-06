import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import Comment from '../Comment/Comment';
import './ThankYou.css';

export default function ThankYou(props) {
    //const [comment, setComment] = useState();
    //const {comm} = this.props.location;
    const [email, setEmail] = useState();
    const comment = props.location.state;
   //let loggedEmail = this.props.useState();
  
    useEffect(() => {
      const loggedInUser = auth.getToken();
    //  setEmail(loggedInUser);
    //setComment(() => { comment = ;});
     if (loggedInUser!=="") {
          setEmail(loggedInUser);
          

    }
  },[]);
    
    return( 
        <div className="comment-wrapper">
        <h1>Enter Your Comments</h1>
        <label>
            <p>Email: {email}</p>   
            <p>Commesdnt: {comment}</p>   
        </label>
        <label>
        </label>
        </div>
      )
    }
    