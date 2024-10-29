

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from '../Redux/CreateSlice';
import { useNavigate } from 'react-router-dom';
import "../Components/StudentList.css";

function StudentList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const students = useSelector((state) => state.student.students);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [sortOption, setSortOption] = useState('');

  const studentsPerPage = 8;

  // Filter and sort students
  const filteredStudents = students
    .filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (selectedClass === '' || student.class === selectedClass)
    )
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'class') return a.class.localeCompare(b.class);
      return 0;
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const handleView = (studentId) => navigate(`/students/view/${studentId}`);
  const handleEdit = (studentId) => navigate(`/students/edit/${studentId}`);
  const handleDelete = (studentId) => dispatch(deleteStudent(studentId));
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
       <div className='filterWrapper'>
          <input
            type='text'
            placeholder='Search by name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value=''>All Classes</option>
            <option value='10th Grade'>10th Grade</option>
            <option value='11th Grade'>11th Grade</option>
            {/* Add more class options as needed */}
          </select>
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value=''>Sort by</option>
            <option value='name'>Name</option>
            <option value='class'>Class</option>
          </select>
        </div>
      <div className='studentListWrapper'>
       

        <div className='tableWrapper'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Class</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents && currentStudents.length > 0 ? (
                currentStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.class}</td>
                    <td>{student.phone}</td>
                    <td>
                      <button onClick={() => handleView(student.id)}>View</button>
                      <button onClick={() => handleEdit(student.id)}>Edit</button>
                      <button onClick={() => handleDelete(student.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No students available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => handlePageChange(index + 1)} 
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
