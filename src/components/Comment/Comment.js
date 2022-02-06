import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import '../Form.css';

export default function Comment(props) {

 
    const [comment, setComment] = useState();
    const [email, setEmail] = useState();
    const [courseCode, setCourseCode] = useState();
    const [courseName, setCourseName] = useState();
   // let loggedEmail = auth.getToken();

    useEffect(() => {
      const loggedInUser = auth.getToken();
     
    //  setEmail(loggedInUser);
     if (loggedInUser!=="") {
          setEmail(loggedInUser);
      }
  },[]);
   
    const handleSubmit = e => {
      e.preventDefault();
     // auth.onAuthentication();
     //const fin_comment = this.comment;
      props.history.push({pathname: '/thankyou', state: {comment: comment, courseCode: courseCode,courseName: courseName}});
   
      
    };
    
      return(
         
        <div className="form-wrapper">
        <h1>Enter Your Comment:</h1>
        <form onSubmit={handleSubmit}>
          <label>
              <p>Course Code:</p>
              <input type="text" onChange={e => setCourseCode(e.target.value)}/>
          </label>
          <label>
              <p>Course Name:</p>
              <input type="text" onChange={e => setCourseName(e.target.value)}/>
          </label>
          <label>
            <p>Email</p>
            <input className = "disabled" type="text" defaultValue ={email} disabled = {true}/>
          </label>
          <label>
              <p>Your GPA:</p>
              <input type="text" onChange={e => e.target.value}/>
          </label>
          <label>
            <p>Comment</p>
            <textarea onChange={e => setComment(e.target.value)} rows={5}/>
          </label>
         
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      )
    }
    