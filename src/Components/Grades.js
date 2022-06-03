import React from "react";

function ShowGrades({ props, expanded }) {
  return (
    <>
      {expanded && (
        <div>
          {props.grades.map((grade, index) => (
            <p key={index}>
              Test {index + 1}: {grade} %
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default ShowGrades;
