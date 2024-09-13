import React, { useState } from 'react';


const registrationForm = () => {

    // Step 1: Setting up state for the form fields
    const [formData, setFormData] = useState({
        fullName:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    });

    // Add Error state
    const [errors, setErrors] = useState({
        nameError:'',
        emailError:'',
        passwordError:''
    });

    // Add successMessage state
    const [successMessage, setSuccessMessage] = useState(''); 

    // Step 2: Handling input changes for all form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    // Email validation function
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    // Step 3: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        setErrors({nameError:'', emailError: '', passwordError: ''});
        setSuccessMessage('');

        if(!formData.fullName){
            setErrors((prevErrors) => ({
                ...prevErrors,
                nameError: 'Please enter a valid email address'
            }));

        }

        // Check if the email is valid

        if(!validateEmail(formData.email)){
            setErrors((prevErrors) => ({
                ...prevErrors,
                emailError: 'Please enter a valid email address'

            }));
            isValid = false;
        }

        // Check if passwords match
        if(formData.password !== formData.confirmPassword){

            setErrors((prevErrors) => ({
                ...prevErrors,
                passwordError:'Password Does Not Match'
            }));
            isValid = false;
        }

        if(isValid){
            setSuccessMessage('Registration successful!');
        }

        // Optionally clear form fields after successful submission
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        });

    };

    return(

        <div className='registration_form_wrapper'>
            <h2 className='form_header'>Registration Form</h2>
            <form id='registration_form' className='registration_form' onSubmit={ handleSubmit }>
                <div className='form_group user_name'>
                    <label for='fullname'>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        className='form_control'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form_group user_email'>
                    <label for='email'>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        className='form_control'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form_group user_phone'>
                    <label for='phone'>Phone No.</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        className='form_control'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form_group user_password'>
                    <label for='password'>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        className='form_control'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form_group user_password'>
                    <label for='confirmPassword'>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        className='form_control'
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
        </div>

    )

};