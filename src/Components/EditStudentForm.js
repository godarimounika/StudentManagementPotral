import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateStudent } from "../Redux/CreateSlice"
import "./EditStudentForm.css"

function EditStudentForm() {
  const { id } = useParams();  // Get the student ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the student by ID from Redux store
  const student = useSelector((state) =>
    state.student.students.find((student) => student.id === parseInt(id))
  );

  // Initialize form state with empty fields, which will be updated with student data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    phone: '',
    address: '',
    age: '',
  });

  // Set form data based on the found student data when component mounts
  useEffect(() => {
    if (student) {
      setFormData(student);  // Prepopulate form with existing student data
    }
  }, [student]);

  // If no student data is found, navigate back to the student list
  useEffect(() => {
    if (!student) {
      alert('Student not found.');
      navigate('/StudentList');
    }
  }, [student, navigate]);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields before submitting
  const validateForm = () => {
    const { name, email, class: studentClass, phone, age } = formData;
    if (!name || !email || !studentClass || !phone || !age) {
      alert('All fields are required!');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Enter a valid email address.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Dispatch an action to update the student details in the Redux store
    dispatch(updateStudent({ id: parseInt(id), ...formData }));
    navigate('/StudentList');  // Redirect to the student list after saving
  };

  return (
    <div className="RegFormWrappers">
    
      <div className="form-items-wrapper">
        <form onSubmit={handleSubmit}>
          <h2 id='editheader' >Edit Student Details</h2>

          <div className="form-items">
            <p>Name:</p>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="form-items">
            <p>Email:</p>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="form-items">
            <p>Class:</p>
            <input type="text" name="class" value={formData.class} onChange={handleInputChange} required />
          </div>

          <div className="form-items">
            <p>Phone:</p>
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>

          <div className="form-items">
            <p>Address:</p>
            <textarea name="address" value={formData.address} onChange={handleInputChange} required />
          </div>

          <div className="form-items">
            <p>Age:</p>
            <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
          </div>

          <div className="form-items button">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStudentForm;
