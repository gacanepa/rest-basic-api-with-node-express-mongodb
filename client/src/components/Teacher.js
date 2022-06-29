import React from 'react';

const Teacher = ({ name, age, status }) => {

  const handleClick = (event, status) => {
    // Show true if the teacher is enabled, false otherwise
    console.log(status);
  };

  return (
    <li onClick={event => handleClick(event, status)} name={name}>{`${name} is ${age} years old`}</li>
  );

};

export default Teacher;
