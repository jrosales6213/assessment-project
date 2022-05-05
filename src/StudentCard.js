import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ShowGrades from "./ShowGrades";

function StudentCard({ allStudents, email, company, city, pic, skill}) {
  const [expanded, setExpanded] = useState(false);

  return (
    
        <div className="test-container">
      <section className="img-container">
                           <img className="img" src={pic} alt="profile-pic"/>
                         </section>
                         <section className="info-container">
                          <div className="card-header">
                           <h1 className="card-title">{city}</h1>
                        {
                          !expanded && <button className="icon-plus" onClick={() => setExpanded(!expanded)}/>
                        }
                        {
                          expanded && <button className="icon-minus" onClick={() => setExpanded(!expanded)}/> 
                        }
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
  
  )
}

export default StudentCard;


