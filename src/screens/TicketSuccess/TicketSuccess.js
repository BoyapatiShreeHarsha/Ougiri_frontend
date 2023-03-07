import React from 'react'
import success from '../../images/success logo.png'
import { useNavigate } from 'react-router-dom';
export default function TicketSuccess() {
    let navigate=useNavigate();
    let handleonclick=()=>{
        navigate("/");
    }
  return (
    <>
    <div className="container">
        <img src={success} alt="success"  style={{maxHeight:"75px",maxWidth:"75px"}} />

        <h2>Congratulations</h2>
        <p>Your ticket is sent to your contact number </p>
        <p>And you can view it in our app on log in</p>

        {/* //need to create component that apper similar to log in ones */}
        <button type="button" class="btn btn-info" onClick={handleonclick}>Cancel</button>
    </div>
    </>
  )
}
