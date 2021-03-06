import React, { useMemo, useState } from "react";
import ShowGrades from "./Grades";
import "./StudentCard.css";

function StudentCard({
  studentList,
  email,
  company,
  pic,
  skill,
  firstName,
  lastName,
  gradeReducer,
  studentGrades,
  tag,
  addNewTag,
}) {
  const [expanded, setExpanded] = useState(false);
  const [inputTag, setInputTag] = useState([]);

  // Previously gradeAverage = studentList.grades.reduce((a,b) => a + parseInt(b), 0) / studentList.grades.length;
  // Suggested to memoize gradeAverage function and move state up.

  const gradeAverage = useMemo(() => gradeReducer(studentGrades), []);

  function handleTagSubmit(e) {
    e.preventDefault();
    addNewTag(studentList.id, inputTag);
    setInputTag("");
  }

  return (
    <div className="studentcard-container">
      <section className="img-container">
        <img className="img" src={pic} alt="profile-pic" />
      </section>
      <section className="info-container">
        <div className="card-header">
          <h1 className="card-title">
            {firstName.toUpperCase()} {lastName.toUpperCase()}
          </h1>
          {!expanded && (
            <button
              className="icon-plus"
              onClick={() => setExpanded(!expanded)}
            />
          )}
          {expanded && (
            <button
              className="icon-minus"
              onClick={() => setExpanded(!expanded)}
            />
          )}
        </div>
        <div className="card-details">
          <p>
            Email : <span>{email}</span>
          </p>
          <p>
            Company : <span>{company}</span>
          </p>
          <p>
            Skill : <span>{skill}</span>
          </p>
          <p>
            Average : <span>{gradeAverage} %</span>
          </p>
        </div>
        <div className="tag-container">
          {tag.map((displayTag, index) => (
            <p key={index}>{displayTag}</p>
          ))}
        </div>

        <ShowGrades
          props={studentList}
          expanded={expanded}
          setExpanded={setExpanded}
        />

        <div className="tag-section">
          <form className="tag-form" onSubmit={(e) => handleTagSubmit(e)}>
            <input
              className="tag-input"
              type="text"
              placeholder="Add a Tag"
              value={inputTag}
              onChange={(e) => setInputTag(e.target.value.toLowerCase())}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default StudentCard;
