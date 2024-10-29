import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../App.css"


function StudentView() {
  const { id } = useParams();
  const student = useSelector((state) =>
    state.student.students.find((s) => s.id === parseInt(id)));
  console.log("Student ID from URL:", id);

  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <div className='view-details'>

      <img src='/images/view-details-icon.png' /> 

    
      
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Class: {student.class}</p>
      <p>Phone: {student.phone}</p>
      
    </div>
  );
}

export default StudentView;
