import React, { Component } from 'react';
import Main from "./Main";
import "../App.css";
export default class Home extends Component {
    render() {
        return (
            <div>
             <div className="img">
             </div>
                <div className="row heads ">
                    <div className="col ml-5">
                            <h1 className="pb-4 text-warning">Attain Your Dream Carrer</h1>
                            <p className="text-white clg">Your College Alternative to a Premium <br></br>Software Engineering Career</p>
                            <p className="text-white">Enroll Today</p>
                            <dl className="text-white">
                   <dd><i className="fa fa-check-circle"></i> Full-Stack Web Development Course</dd>
                   <dd><i className="fa fa-check-circle"></i> No Coding Background Required</dd>
                   <dd> <i className="fa fa-check-circle"></i> Pay only when you get placed*</dd>
                   <dd><i className="fa fa-check-circle"></i> Live-Online Interactive Classes</dd>
                   <dd><i className="fa fa-check-circle"></i> Flexible Evening Classes</dd>
               </dl>
               <button type="button" className="btn btn-warning text-white">Get Started</button>
               </div>
                    </div>             
               <Main/>
            </div>
        )
    }
}
