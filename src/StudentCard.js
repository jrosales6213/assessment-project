import React, { useState } from "react";


function StudentCard({props}) {
// console.log(data.students?.map((item) => item.grades))
    const [collapse, setCollapse] = useState(false);
    
   


// const accordionData = (
//  <ul>
//       <li>Test 1: <span>67</span></li>
//       <li>Test 1: <span>67</span></li>
//       <li>Test 1: <span>67</span></li>
//       <li>Test 1: <span>67</span></li>
     
// </ul>
// )

// function ToggleButton(){
//   return (
//     <div onClick={() => setCollapse(!collapse)}>
//     {collapse ? <button  className="icon-minus" /> : <button  className="icon-plus" /> }  
//        </div>
//   )
// }
// function handleToggle() {
//   setCollapse(!collapse);
// }

// function ShowGrades({props}) {
//     props.grades.map((grade, idx) => {
//       return <p>   Test{idx + 1}: {grade}% </p>;
//   });
// }
function ShowGrades({grade}) {
 return grade.map((item) => <li>{item}</li>)
  }

// function ToggleButton(props) {
//   const { collapse, handleToggle } = props;
//   return (
//       <>
//           <div onClick={() => handleToggle()}>     
               
//           </div>
//       </>
//   );
// }
function RenderCard({email, company, city , pic, skill, grades}){
  // function ShowGrades({props}) {
  //   props.grades.map((item) => {
  //     return <p>{item}</p>
  //   })
  // }
  console.log(grades)


  return (
    <>
    <section className="img-container">
                           <img className="img" src={pic} alt="profile-pic"/>
                         </section>
                         <section className="info-container">
                          <div className="card-header">
                           <h1 className="card-title">{city}</h1>
                         {/* <div onClick={() => setCollapse(!collapse)}>
                            {collapse ? <button  className="icon-minus" /> : <button  className="icon-plus" /> }  
                               </div>  */}
                               {/* <ToggleButton /> */}
                               <button  onClick={()=> setCollapse(!collapse)}>Plus</button>
                           </div>
                           <div className="card-details">
                          <p>Email : <span>{email}</span></p>
                          <p>Company : <span>{company}</span></p>
                          <p>Skill : <span>{skill}</span></p>
                         <p>Average : <span>Yadel</span></p>     
                          </div> 
                        <ShowGrades grade={grades} />
                          {/* {collapse && <ShowGrades props={item}/>} */}
                          {/* <ShowGrades props={item}/> */}
                          {/* {collapse ? null : (
                        <div>
                           <ShowGrades />
                        </div>
                    )} */}
                           
          {/* {collapse && <ul>{accordionData}</ul>}  */}
                         </section>
        </>
  )
}

// const sidebar = (
//     <>
//       {props.map((item) =>
//         // <li key={post.id}>
//         //   {post.city}
//         // </li>
//         <div key={item.id}>
//             <RenderCard student={item}/>
//         </div>
    
                    
//       )}
//     </>
//   );


return (
    <div className="container">
    <div className="card-container">
    {props.map((item) =>
        <div key={item.id}>
            <RenderCard item={item} email={item.email} company={item.company}  city={item.city} pic={item.pic} skill={item.skill} grades={item.grades}/>
        </div>              
      )}
     </div>
     </div>  
)
}

export default StudentCard;


