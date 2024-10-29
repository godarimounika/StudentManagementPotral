// import React, { useState ,useEffect} from 'react'

// import "../Components/studentform.css"
// import { useDispatch } from 'react-redux';
// import { addStudent } from '../Redux/CreateSlice';

// function StudentForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: '',
//     class: '',
//     address: '',
//     phone: ''
//   });
//   const [errors, setErrors] = useState({})
//   const [students, setStudents] = useState([]);
//   const dispatch = useDispatch()


//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid Email Address';
//     if (!formData.age) newErrors.age = "Age is Required";
//     if (!formData.class) newErrors.class = "Class is required";
//     if (!formData.address) newErrors.address = 'Address is Required'
//     if (!formData.phoneNumber) newErrors.address = 'phoneNumber is Required'
//     else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number must be exactly 10 digits';


//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };


//   useEffect(() => {
//     const storedStudents = JSON.parse(localStorage.getItem('students'));
//     if (storedStudents) {
//       setStudents(storedStudents);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('students', JSON.stringify(students));
//   }, [students]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       const newStudent = { ...formData, id: students.length + 1 }; // Assign an ID based on current length
//       setStudents((prevStudents) => [...prevStudents, newStudent]);
//       dispatch(addStudent(newStudent)); // Add to Redux store
//       setFormData({ name: '', email: '', age: '', class: '', address: '', phone: '' }); // Reset form
//     }
//   };





//   return (
//     <div className='RegFormWrapper'>
//       <div className='form-img'>
//         <img src='images/studentsimg333.avif' alt='studentImage' />
//       </div>
//       <div className='form-items-wrapper'>
//         <form onSubmit={handleSubmit}>
//           <div className='form-items'>
//             <p>Name :</p>
//             <input type='text' name='name' placeholder='enter your name'  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//             {errors.name && <span className='error'> {errors.name}</span> }
//           </div>
//           <div className='form-items'>
//             <p>Email:</p>
//             <input type='email' name='email' placeholder='enter your email' value={formData.email}  onChange={(e) => setFormData({...formData, email:e.target.value})} />
//             {errors.email && <span className='error'>{errors.email}</span>}
//           </div>
//           <div className='form-items'>
//             <p>Age:</p>
//             <input type='number' name='age' placeholder='enter your age' value={formData.age} onChange={(e)=>setFormData({...formData , age:e.target.value})} />
//             {errors.age && <span className='error' >{errors.age}</span>}
//           </div>
//           <div className='form-items'>
//             <p>Class:</p>
//             <input type='text' name='class' placeholder='enter your class'  value={formData.class}  onChange={(e)=>setFormData({...formData , class:e.target.value})}/>
//             {errors.class && <span className='error'>{errors.class}</span>}
//           </div>
//           <div className='form-items'>
//             <p>Address:</p>
//             <textarea name='address' type="text" placeholder='Address...' value={formData.address}  onChange={(e)=>setFormData({...formData , address:e.target.value})}/>
//             {errors.class && <span className='error'>{errors.address}</span> }
//           </div>
//           <div className='form-items'>
//             <p>Phone Number:</p>
//             <input type='number' name='class' placeholder='enter phone Number'  value={formData.phoneNumber}  onChange={(e)=>setFormData({...formData , phone:e.target.value})}/>
//             {errors.class && <span className='error'>{errors.class}</span>}
//           </div>
//           <div className='form-items button'>
//             <button type='submit'>Register</button>
//           </div>

//         </form>
//       </div>

//     </div>



//   )
// }

// export default StudentForm


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../Redux/CreateSlice';
import '../Components/studentform.css';

function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '' // Fixed to match validation logic
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid Email Address';
    if (!formData.age) newErrors.age = "Age is Required";
    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.address) newErrors.address = 'Address is Required';
    if (!formData.phone) newErrors.phone = 'Phone number is Required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newStudent = { ...formData, id: Date.now() }; // Use a timestamp as a unique ID
      dispatch(addStudent(newStudent)); // Add to Redux store
      setFormData({ name: '', email: '', age: '', class: '', address: '', phone: '' }); // Reset form
    }
  };

  return (
    <div className='RegFormWrapper'>
      <div className='form-img'>
        <img src='images/studentsimg333.avif' alt='studentImage' />
      </div>
      <div className='form-items-wrapper'>
        <form onSubmit={handleSubmit}>
          <div className='form-items'>
            <p>Name :</p>
            <input
              type='text'
              name='name'
              placeholder='enter your name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <span className='error'>{errors.name}</span>}
          </div>
          <div className='form-items'>
            <p>Email:</p>
            <input
              type='email'
              name='email'
              placeholder='enter your email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>
          <div className='form-items'>
            <p>Age:</p>
            <input
              type='number'
              name='age'
              placeholder='enter your age'
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            {errors.age && <span className='error'>{errors.age}</span>}
          </div>
          <div className='form-items'>
            <p>Class:</p>
            <input
              type='text'
              name='class'
              placeholder='enter your class'
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
            />
            {errors.class && <span className='error'>{errors.class}</span>}
          </div>
          <div className='form-items'>
            <p>Address:</p>
            <textarea
              name='address'
              placeholder='Address...'
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            {errors.address && <span className='error'>{errors.address}</span>}
          </div>
          <div className='form-items'>
            <p>Phone Number:</p>
            <input
              type='text'
              name='phoneNumber' // Updated name
              placeholder='enter phone Number'
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} // Updated name
            />
            {errors.phone && <span className='error'>{errors.phone}</span>}
          </div>
          <div className='form-items button'>
            <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
