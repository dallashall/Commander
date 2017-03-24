import React from 'react';

export default ({ assigneesNames }) => {
  console.log(assigneesNames);
  if (assigneesNames.length) {
    return (
      <div className="assignees">
        <strong>Assigned to: </strong>{assigneesNames.map((assigneeName, idx) => <p key={idx}> {assigneeName} </p>)}
      </div>
    );
  } else {
    return <div></div>;
  }
};