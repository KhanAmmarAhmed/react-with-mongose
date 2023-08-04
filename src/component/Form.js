import React from 'react';
import { useState } from 'react';


export default function Form(props) {

  const [form, setForm] = useState({});

 
  const handelSubmit = async (event) =>{
    event.preventDefault();
    const response = await fetch('http://localhost:8080/demo', {
      method: 'post',
      body: JSON.stringify(form),
      headers: {
          'Content-Type' : 'Application/json'
      }
    })
    const data = await response.json();
    console.log(data);

  }
  const handelForm = (event)=>{
    //console.log(event.target.value, event.target.name);
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }
  return (
    <div>
        <div className="mb-3 my-3">
          <h1 className={`text-${props.mode==="dark"? "light": "dark"}`} >write text Hare</h1>

            <textarea className={`form-control`} style={{backgroundColor:props.mode==="dark"? "cyan": "white"}} id="exampleFormControlTextarea1" rows={props.textarea}></textarea>


            {/* <textarea className={`form-control bg-${props.mode === "dark"? "cyan" : "cyan"}`} id="exampleFormControlTextarea1" rows={props.textarea}></textarea> */}
           <div  className="my-2">
            <button type="button" className="btn btn-primary my-1">To UpperCase</button>
            <button type="button" className="btn btn-primary mx-2 my-1">To LowerCase</button>
            <button type="button" className="btn btn-primary my-1">Clear</button>
           </div>
        </div> 


        
      <div className="submitForm my-5">
        <h1 className={`text-${props.mode==="dark"? "light": "dark"}`} >Form</h1>


        <form onSubmit={handelSubmit}>
          <div className="row g-3">
            <div className="col">
              <input type="text" id="fname" name="fname" style={{backgroundColor:props.mode==="dark"? "cyan": "white"}} className="form-control" onChange={handelForm} placeholder="First name" aria-label="First name"/>
            </div>
            <div className="col">
              <input type="text" className="form-control" id="lname" name="lname" style={{backgroundColor:props.mode==="dark"? "cyan": "white"}}  onChange={handelForm} placeholder="Last name" aria-label="Last name"/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col"> 
              <input type="email" className="form-control my-2" name="mail" onChange={handelForm} style={{backgroundColor:props.mode==="dark"? "cyan": "white"}} id="mail" placeholder="Email"/>
              </div>
              <div className="col"> 
              <input type="password" className="form-control my-2" name="password" onChange={handelForm} style={{backgroundColor:props.mode==="dark"? "cyan": "white"}} id="password" placeholder="Password"/>
            </div>
          </div>
          <div className="col-12">
            <input type="text" className="form-control"  onChange={handelForm} style={{backgroundColor:props.mode==="dark"? "cyan": "white"}} id="address" name="address" placeholder="Address"/>
          </div>
          <button type="submit" className="btn btn-primary my-2">Submit</button>    
        </form>


      </div>
    </div> 
    )
}
