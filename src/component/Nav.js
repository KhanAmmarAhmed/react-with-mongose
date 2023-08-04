import React from 'react'

export default function Nav(props) {
 

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/">Features</a>
                    <a className="nav-link" href="/">Pricing</a>
                    
                </div>
                </div>
                
            </div>
            <div className="form-check form-switch">
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                  <label className={`form-check-label text-${props.mode==="light"? "dark": "light"}`} htmlFor="flexSwitchCheckChecked">Switch mode</label>
              </div>
        </nav>
    </div>
  )
}
