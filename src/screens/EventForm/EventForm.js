import React,{useState,useContext,useEffect} from 'react'
import logo from '../../images/logo.jpg'
import './EventForm.css'
import { useNavigate } from 'react-router-dom';
import ticketContext from '../../context/Event/TicketContext';

export default function EventForm() {
    let navigate = useNavigate();
    const content = useContext(ticketContext);
    let { addticket,result,setResult }=content;


    const [credentials, setCredentials] = useState({fname: "",lname: "",email: "",contactnumber: "",quantity:1});

    let changing = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    let Submitted= (e)=>{
        e.preventDefault();
        addticket(credentials.fname,credentials.lname,credentials.email,credentials.contactnumber,credentials.quantity);

        setCredentials({fname: "",lname: "",email: "",contactnumber: "",quantity:1})

    }

    useEffect(() => {
      if(result!=="")
      {
        if(result==="success")
        {
            console.log(result);
            setResult(null);
            navigate("/events/success");
        }
        else if(result==="failure")
        {
            setResult(null);
            navigate("/events/failure");
        }
      }  
    }, [result])
    

    return (
        
        <div className="EventForm_bodyy">
            <div className="EventForm_box">
                <div className="EventForm_heading">
                    <img src={logo} alt="Ougri" />
                    <p>O U G R I</p>
                </div>
                <form onSubmit={Submitted}>
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">Name</label>
                        <div className="EventForm_flexing">
                            <span >
                                <input type="text" className="form-control" id="first_name" name="fname" value={credentials.fname} onChange={changing} />
                                <div id="first_name_tag" className="form-text">First Name</div>
                            </span>
                            <span>
                                <input type="text" className="form-control" id="last_name" name="lname" value={credentials.lname} onChange={changing} />
                                <div id="last_name_tag" className="form-text">Last Name</div>
                            </span>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="emailId" className="form-label">Email address*</label>
                        <input type="email" className="form-control" id="emailId" name='email' value={credentials.email} onChange={changing} aria-describedby="emailHelp" required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                        <input type="tel" pattern="[0-9]{10}" className="form-control" id="contactnumber" placeholder='+91' name='contactnumber' value={credentials.contactnumber} onChange={changing}/>
                    </div>

                    <div className="mb-3">
                        <div className="EventForm_flexing">
                        <label htmlFor="quantity" className="form-label">Tickets</label>
                        <label htmlFor="quantity" className="form-label">Rs 500/-</label>
                        </div>
                        <div className="EventForm_flexing2">
                        <div id="quantity_tag" className="form-text ">Quantity:</div>
                        <input type="number" className="form-control " id="quantity" min='1' name="quantity" value={credentials.quantity} onChange={changing}/>
                        </div>
                    </div>

                    <button type="submit" className="EventForm_mbtn">Continue to Payment</button>
                </form>
            </div>
            </div>
    
    )
}