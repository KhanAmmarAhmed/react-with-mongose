// import React from 'react'
// import { useState } from "react";

export default function About(props) {
   

  

  return (
    <>
    <h1  className={`text-${props.mode==="dark"? "light": "dark"}`} >About Us</h1>
     <div className={`container`} style={{backgroundColor:props.mode==="dark"? "cyan": "white"}}>
        
        <div className="accordion accordion-flush border-primary border-dark my-2" id="accordionFlushExample" >
        
            <div className={`accordion-item `}>
                
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed`} 
                style={{backgroundColor:props.mode==="dark"? "cyan": "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body bg-blue`}  style={{backgroundColor:props.mode==="dark"? "#e6e4df": "white"}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed `}  style={{backgroundColor:props.mode==="dark"? "cyan": "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body`}  style={{backgroundColor:props.mode==="dark"? "#e6e4df": "white"}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed`}  style={{backgroundColor:props.mode==="dark"? "cyan": "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body`}  style={{backgroundColor:props.mode==="dark"? "#e6e4df": "white"}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
        </div>
      
    </div>
    
    </>
   
  )
}
