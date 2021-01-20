import React, { Component } from 'react';
import Logo from "../assert/logo.png";
import Cap from "../assert/cap.jpg";
import Court from "../assert/court.jpg";
import Job from "../assert/job.png";
import Search from "../assert/search.png";
import "../App.css";
export default class Main extends Component {
    render() {
        return (
            <div className="mn">
               <div className="row sub">
                <div className="col">
                <div className="part-time">Part Time-Evening Classes</div>
                </div>
                <div className="col">
                    <ul>
                        <li>Schedule | Mon-Fri (6pm-11pm)</li>
                        <li>Live & Online Classes</li>
                        <li>12 Months Highly Engaging Curriculum</li>
                    </ul>
                </div>
             </div> 
             <div className="row  w-75 m-auto p-5 ">
                 <div className="col m-5 p-3">
                <h1 className="text-white text-center bg-warning"> Next Batch: 22nd February</h1>
                 </div>
                 </div>
                 <div className="row container" style={{textAlign:"center",width:"90%",margin:" 2em auto"}}>
                <div className="col">
                <dl>
                    <dd className="num">1030+</dd>
                    <dd className="en">Enrolled Students</dd>
                    <dd>Over 1,00,000 Student Applications</dd>
                    <dd>Primary Selection Criteria - Commitment</dd>
                </dl>
                </div>
                <div className="col">
                <dl>
                <dd className="num">185+</dd>
                    <dd className="en">Placement Partners</dd>
                    <dd>Looking for Skills over Degrees</dd>
                    <dd>From Early Stage to Unicorn Startups</dd>
                </dl>
                </div>
                <div className="col">
                <dl>
                    <dd className="num">390+</dd>
                    <dd className="en">Absolute Beginners</dd>
                    <dd>Beginner to Entry Level Course</dd>
                    <dd>Switch Career to Software Engineering</dd>
                </dl>
                </div>
             </div>
             <div className="row container" style={{padding:"4em 0"}}>
                <div className="col">
                <div className="para-1">Who is it for?</div>
                <div className="hr"></div>
                </div>
                <div className="col">
                <div className="row ">
                <div className="col-6 cls-4">
                College Final Year
                <div><img src={Cap} width="150" height="150" alt="" ></img></div>
                </div>
                <div className="col-6 cls-4">
                Job Switcher
                <div><img src={Search} width="200" alt="" ></img></div>
                </div>
                <div className="col-6 cls-4">
                Job Seeker
                <div><img src={Job} width="200" alt="" ></img></div>
                </div>
                <div className="col-6 cls-4">
                12th Complete
                <div><img src={Court} width="250" height="150" alt="" ></img></div>
                </div>
                </div>
                </div>
             </div>
             <div className="help">How does AttainU help?</div>
             <div className="hr"></div>
             <p className="para">With AttainU you can completely re-write your career. No prior coding knowledge needed. Only willingness to put in efforts is required. Learn in-depth Software Development besides interview preparation. We prioritize on teaching excellence above all else.</p>
            <div className="row container" style={{textAlign:"center",width:"80%",margin:"auto",padding:"2em 0"}}>
            <div className="col">
                <div className="fonts"><i className="fa fa-graduation-cap"></i></div>
            <p>Out of 90 lakhs only 15% get direct jobs rest are unemployed</p>
            </div>
            <div className="col">
            <div className="fonts"> <i className="fa fa-cloud-upload-alt"></i></div>
            <p>Quality and the Industry alignment are the biggest concerns with college & offline course</p>
            </div>
            <div className="col">
            <div className="fonts"><i className="fa fa-tv"></i></div>
            <p>Online self paced courses, have approx. 5% completion rates due to low engagement</p>
            </div>
            </div>
            <div className="help">Placement Offers at AttainU</div>
            <div className="hr"></div>
            <div className="font">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
            <div className="hover"><i className="fa fa-volume-up"></i>Read More Placement Stories | <i className="fa fa-redo"></i> Explore our Placement Process </div>
           <div className="aply"><button type="button" className="btn btn-warning text-white" style={{padding:"0.5em  3em"}}> Apply Now</button></div>
           <div className="help">Course Highlights</div>
           <div className="hr"></div>
           <div className="row container course"> 
            <div className="col">
            <dl>
                <dd className="fonts"><i className="fa fa-hourglass-half"></i></dd>
                <dd className="num">12</dd>
                <dd>Months Long</dd>
                <dd>Evening Classes</dd>
                <dd>Mon - Fri (6pm to 11pm)</dd>
            </dl>
            </div>
            <div className="col">
            <dl>
            <dd className="fonts"><i className="fa fa-laptop-code"></i></dd>
                <dd className="num">3</dd>
                <dd>Industry Relevant</dd>
                <dd>Projects</dd>
            </dl>
            </div>
            <div className="col">
            <dl>
            <dd className="fonts"><i className="fas fa-people-carry"></i></dd>
                <dd className="num">30</dd>
                <dd>Peer Based</dd>
                <dd>Mock Interviews</dd>
            </dl>
            </div>
            <div className="col">
            <dl>
            <dd className="fonts"><i className="fa fa-laptop"></i></dd>
                <dd className="num">19</dd>
                <dd>Placement Preparation</dd>
                <dd>Tests</dd>
            </dl>
            </div>
           </div>
           <div className="row container">
            <div className="col-4">
            <div>Student Projects</div>
            <dl>
                <dd className="animate">
                    <div className="bold">AGRICOM</div>
                    <div>Direct to Farm</div>
                </dd>
                <dd className="animate">
                    <div className="bold">BOOKWORM</div>
                    <div>Book ordering web app</div>
                </dd>
                <dd className="animate">
                    <div className="bold">SOCIALNETWORK</div>
                    <div>Networking for Professionals</div>
                </dd>
                <dd className="animate">
                    <div className="bold">EASYATTEND</div>
                    <div>Employee Attendance Tracking</div>
                </dd>
            </dl>
            </div>
            <div className="col">
            <video width="100%" height="250" controls>
  <source  src="https://www.youtube.com/embed/XfdBt90vD4Q.mp4" type="video/mp4">
 </source>
 <source src="https://www.youtube.com/embed/XfdBt90vD4Q.ogg" type="video/ogg"></source>
</video>
            </div>
           </div>
           <div className="help">Fee Payment Options</div>
           <div className="hr"></div>
           <div className="row container payment">
            <div className="col">
                <div className="opt">Option 1</div>
            <dl className="pay">
                <dd className="card-1"><i className="far fa-credit-card"></i></dd>
                <dd style={{fontSize:"2em"}}>2,60,000/-</dd>
                <dd>Pay After Placement</dd>
            </dl>
            </div>
            <div className="col">
            <div className="opt">Option 2</div>
            <dl className="pay">
            <dd className="card-2"><i className="far fa-credit-card"></i></dd>
                <dd className="strike">1,60,000/-</dd>
                <dd style={{fontSize:"2em"}}>1,25,000/-</dd>
                <dd>Upfront Fee Payment</dd>
            </dl>
            </div>
           </div>
           <div className="calendar">
               <dl className="all">
                   <dd><i className="fa fa-credit-card"></i>Total Fee</dd>
                   <dd style={{fontSize:"2em"}}>2.60 Lakhs</dd>
               </dl>
               <dl style={{padding:"1em"}}>
                   <dd><i className="fa fa-edit"></i> Registration Fee Portion</dd>
                   <dd><span style={{fontSize:"2em"}}>60,000 </span>(+18% GST) Non-refundable, paid upfront </dd>
               </dl>
               <dl className="all">
                   <dd><i className="fa fa-calender-week"></i>Tuition Fee Portion</dd>
                   <dd><span style={{fontSize:"2em"}}>2 Lakhs </span>  Pay only when you get a job of min 5 LPA. </dd>
               </dl>
               <dl style={{padding:"1em"}}>
                   <dd><i className="fa fa-calendar-alt"></i>Tuition Fee EMI Options</dd>
                   <dd><span style={{fontSize:"2em"}}>24 Months  </span> (subject to co-applicant credit rating). Else 1 to 10 months options. </dd>
               </dl>
               <dl className="all-1">
                   <dd><i className="fa fa-university"></i> ISA Breach Recovery Cheque</dd>
                   <dd><span style={{fontSize:"2em"}}>50,000 </span>Executed only in the case of ISA Breach </dd>
               </dl>
           </div>
           <div style={{textAlign:"center",padding:"2em 0"}}>Know more--&gt; </div>
           <div className="help">What We Are Looking For</div>
           <div className="hr"></div>
           <div className="row container details">
           <div className="col-4 details-1">
              <div className="fonts"> <i className="far fa-comment"></i></div>
                <div>Spoken and Written English Proficiency</div>
           </div>
           <div className="col-4 details-1 rmv">
               <div className="fonts"><i className="fa fa-book"></i></div>
            <div>Min. Education - 12th Grade or equivalent</div>
           </div>
           <div className="col-4 details-1">
           <div className="fonts"><i className="fa fa-laptop-code"></i></div>
            <div>Amenities - Laptop, Internet, Electricity</div>
           </div>
           <div className="col-4 details-1">
           <div className="fonts"><i className="fa fa-tv"></i></div>
          <div> 4-5 hours Commitment (Mon - Fri)</div>
           </div>
           <div className="col-4 details-1">
           <div className="fonts"><i className="fa fa-book-reader"></i></div>
            <div>Self Study - Should be able to put the minimum required Efforts</div>
           </div>
           <div className="col-4 details-1">
           <div className="fonts"><i className="far fa-comment"></i></div>
            <div>Looking for Job Immediately after Course Completion</div>
           </div>
           </div>
           <div style={{textAlign:"center",padding:"2em 0"}}>Know more--&gt; </div>
           <div className="aply"><button type="button" className="btn btn-warning text-white" style={{padding:"0.5em  3em"}}> Get Started</button></div>
           <div className="help">In the Press</div>
           <div className="hr"></div>
           <div className="row container about">
            <div className="col abt">
            <div className="bg-1">BT</div>
            <p className="para-2">60%+ engineering graduates are unemployed. Beyond engineering, this problem multiplies 10 times.</p>
            <div className="article">Read Article--&gt;</div>
            </div>
            <div className="col abt">
            <div className="bg-1">YS</div>
            <p className="para-2">Why this ex-Uber and Google engineer decided to skill college graduates with his edtech startup?</p>
            <div className="article">Read Article--&gt;</div>
           </div>
           <div className="col abt">
                <div className="bg">Inc</div>
                <p className="para-2">AttainU aims to ensure that India's demographic numbers convert into a dividend instead of a burden.</p>
                <div className="article">Read Article--&gt;</div>
           </div> 
           <div className="col abt">
            <div className="bg">Bloomberg</div>
            <p className="para-2">College education challenges are lack of counselling, obsolete faculty and outdated curriculum.</p>
                <div className="article">Read Article--&gt;</div>
            </div>
           </div>
           <div className="inpt-value">
               <dl className="inpt">
                   <dd className="inpt-1">Ready to get started?</dd>
                   <dd className="inpt-2"><input type="text" placeholder="Email" style={{padding:"0.3em 0"}} ></input></dd>
                   <dd className="inpt-2 "><input type="text" placeholder="Phone" style={{padding:"0.3em 0"}}></input></dd>
                   <dd className="inpt-2"><button type="button" className="btn btn-primary text-white">Get Started</button></dd>
               </dl>
           </div>
           <div className="foot">
           <div className="row container footer">
            <div className="col">
            <img src={Logo} width="30" height="30" className="d-inline-block align-top " alt=""></img>  
            <span className="pl-3" >AttainU</span> 
            <p>AttainU is a scalable college alternative, focusing on high-quality, industry-aligned learning outcomes, targeted towards highly motivated individuals looking to get into high growth careers</p>         
            <div>* Registration fee applicable</div>
            <div className="web">
               <a href="https://www.linkedin.com/"> <i className="fab fa-linkedin web-1"></i></a>
              <a href="https://www.facebook.com/">  <i className="fab fa-facebook-square web-1"></i></a>
                <a href="https://www.youtube.com/"><i className="fab fa-youtube web-1"></i></a>
            </div>
            </div>
            <div className="col">
            <div>Important Links</div>
            <div className="hr-1"></div>
            <dl>
                <dd>Blog</dd>
                <dd>Forum</dd>
                <dd>Privacy Policy</dd>
                <dd>Terms & Conditions</dd>
                <dd>Sitemap</dd>
            </dl>
            </div>
            <div className="col">
            <div>Contact Us</div>
            <div className="hr-1"></div>
            <dl>
                <dd>For Admissions:</dd>
                <dd>080-47192019</dd>
                <dd>admissions@attainu.com</dd>
            </dl>
            <dl>
                <dd>For Hiring Partners:</dd>
                <dd>hiringpartners@attainu.com</dd>
            </dl>
            <dl>
                <dd>Office Address:</dd>
                <dd>BHIVE Workspace, L-148, 5th Main Rd,</dd>
                <dd>Sector 6, HSR Layout, Bengaluru,</dd>
                <dd>Karnataka 560102</dd>
                </dl>
                <dl>
                <dd>Communication Address:</dd>
                <dd>Avi Singh, AttainU</dd>
                <dd>House Number-10, K Cottage, Near</dd>
                <dd>Corporation School,</dd>
                <dd>Railway Hunder Road, East Lohanipur,</dd>
                <dd>Kadam Kuan, Patna,</dd>
                <dd>Bihar 800003</dd>
                </dl>
            </div>
           </div>
           <div className="copy-right">Copyright &copy; 2020,LeetU Education Pvt. Ltd.</div>
           </div>
           
            </div>
        )
    }
}
