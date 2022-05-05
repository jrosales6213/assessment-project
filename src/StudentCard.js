import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ShowGrades from "./ShowGrades";

function StudentCard({key, allStudents, email, company, city, pic, skill}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container">
      <div className="card-container">
        <div className="test-container">
      <section className="img-container">
                           <img className="img" src={pic} alt="profile-pic"/>
                         </section>
                         <section className="info-container">
                          <div className="card-header">
                           <h1 className="card-title">{city}</h1>
                  
                           <button className="icon-plus" onClick={() => setExpanded(!expanded)}>See Test Scores</button>
                           </div>
                           <div className="card-details">
                          <p>Email : <span>{email}</span></p>
                          <p>Company : <span>{company}</span></p>
                          <p>Skill : <span>{skill}</span></p>
                         <p>Average : <span>Yadel</span></p>     
                          </div> 
           
                          <ShowGrades props={allStudents} expanded={expanded} setExpanded={setExpanded} />
               
                         </section>
                </div>
      </div>
    </div>
  )
}

export default StudentCard;


