import React, { useState } from "react";

function StudentCard({data}) {
console.log(data)
    const [collapse, setCollapse] = useState(false)

//     grades: Array(8)
// 0: "78"
// 1: "100"
// 2: "92"
// 3: "86"
// 4: "89"
// 5: "88"
// 6: "91"
// 7: "87"
const accordionData = (
    <>
    <li>Test 1: <span>89%</span></li>
    <li>Test 1: <span>89%</span></li>
    <li>Test 1: <span>89%</span></li>
    <li>Test 1: <span>89%</span></li>
    <li>Test 1: <span>89%</span></li>
</>
)
   


return (
    <div className="container">
    <div className="card-container">
        <div className="test-container">
       <section className="img-container">
       <img className="img" src="https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg" alt="profile-picture"/>
       </section>
       <section className="info-container">
           <div className="card-header">
                <h1 className="card-title">FUSHE-MUHURRF</h1>
                <img onClick={() => setCollapse(!collapse)} className="icon-plus" src="https://img.icons8.com/emoji/48/000000/plus-emoji.png"/>
            </div>
  
       <div className="card-details">
            <p>email: <span>iorton0@imdb.com</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>
            {/* <p>{accordionData}</p>     */}
             
        </div> 
        <div>
            
            {collapse && <ul>{accordionData}</ul>}
        
        </div>
        <hr/>
       </section>
       </div>

       <div className="test-container">
       <section className="img-container">
       <img className="img" src="https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg" href="profile-picture"/>
       </section>
       <section className="info-container">
       <h1 className="card-title">FUSHE-MUHURRF</h1>
       <div className="card-details">
            <p>email: <span>iorton0@imdb.com</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>    
        </div> 
        <hr/>
       </section>
       </div>
       <div className="test-container">
       <section className="img-container">
       <img className="img" src="https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg" href="profile-picture"/>
       </section>
       <section className="info-container">
       <h1 className="card-title">FUSHE-MUHURRF</h1>
       <div className="card-details">
            <p>email: <span>iorton0@imdb.com</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>    
        </div> 
        <hr/>
       </section>
       </div>
       <div className="test-container">
       <section className="img-container">
       <img className="img" src="https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg" href="profile-picture"/>
       </section>
       <section className="info-container">
       <h1 className="card-title">FUSHE-MUHURRF</h1>
       <div className="card-details">
            <p>email: <span>iorton0@imdb.com</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>    
        </div> 
        <hr/>
       </section>
       </div>
       <div className="test-container">
       <section className="img-container">
       <img className="img" src="https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg" href="profile-picture"/>
       </section>
       <section className="info-container">
       <h1 className="card-title">FUSHE-MUHURRF</h1>
       <div className="card-details">
            <p>email: <span>iorton0@imdb.com</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>
            <p>Company : <span>Yadel</span></p>    
        </div> 
        <hr/>
       </section>
       </div>
     
     
       </div>
     </div>  
)
}

export default StudentCard;