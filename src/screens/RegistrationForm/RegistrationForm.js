import React, { useState, useContext } from 'react'
// eslint-disable-next-line
import { useEffect } from 'react';
// eslint-disable-next-line
import logo from '../../images/logo.jpg'
import RegistationContext from '../../context/Registration/RegistrationContext'
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'


const RegistrationFrom = () => {
    let navigate = useNavigate();
    const content = useContext(RegistationContext);
    let { adduser,result,setResult} = content;
    let items = [];
    const [credentials, setCredentials] = useState({ fname: "", lname: "", email: "", contactnumber: "" })
    let Submitted = (e) => {
        e.preventDefault();
        if(items.length!==0)
        {adduser(credentials.fname, credentials.lname, credentials.email, credentials.contactnumber, items)
        setCredentials({ fname: "", lname: "", email: "", contactnumber: "" })}
        else{
            alert("You have not ticked anything")
        }

    }
    let changing = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    const handleClick = (e) => {
        const newItem = e.target.value;
        let flag = true;
        items.forEach((item) => {
            if (item == newItem) {
                flag = false;
            }
        })
        if (flag === true) {
            items.push(newItem);
        } else {
            const a = items.filter((item) => {
                return item !== newItem
            })
            items = a;
        }

        console.log(items);
    }

    let handleChange = () => {

    }

    useEffect(() => {
        if(result!=="")
        {
          if(result==="success")
          {
              console.log(result);
              setResult(null);
              navigate("/registration/success");
          }
          else if(result==="failure")
          {
              setResult(null);
              navigate("/registration/failure");
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
                        <input type="email" className="form-control" id="emailId" name='email' value={credentials.email} onChange={changing} aria-describedby="emailHelp" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                        <input type="tel" pattern="[0-9]{10}" className="form-control" id="contactnumber" placeholder='+91' name='contactnumber' value={credentials.contactnumber} onChange={changing} />
                    </div>
                    <h6>Click Below To Participate In Other Events</h6>
                    <div className='container event-list' style={{display:"flex",justifyContent:"space-evenly"}}>

                        <div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" onChange={handleChange} onClick={handleClick} value="Event Name1" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" onChange={handleChange} onClick={handleClick} value="Event Name2" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div><div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" onChange={handleChange} onClick={handleClick} value="Event Name3" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name 4" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div><div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name5" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name 6" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div><div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name7" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name 8" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div><div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name9" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name10" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>

                        </div>
                        <div >
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name11" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name12" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div><div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name13" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name14" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div><div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name15" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name16" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div><div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name17" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name18" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name19" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="Event Name20" onChange={handleChange} onClick={handleClick} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Event Name
                                </label>
                            </div>

                        </div>
                    </div>


                    <button type="submit" className="EventForm_mbtn">Continue to Payment</button>
                </form>
            </div>
        </div>

    )
}

export default RegistrationFrom
