import React, { useState } from 'react'
import "./pages.css"

export default function SignUp() {

    const [gender, setGender] = useState();

    function handleGender(value){
        setGender(value);
    }
  return (
    <div className='sign-up'>
        <div className="login-container">
            <h2>Sign Up</h2>
            <form className="login-form">
                <label>Name</label>
                <input type='text' name='name' placeholder='Enter your name' required />
                <label>Age</label>
                <input type='number' name='age' placeholder='Enter your age' required />
                <label>Address</label>
                <input type='text' name='address' placeholder='Enter your Full address' required />
                <label>Gender</label>
                    <div className='gender-option'>
                        <input type='radio' id='male' name='gender' value="male" 
                        onChange={()=>{
                            handleGender("male")
                        }}/>
                        <p htmlFor="male" className='gender-category'>Male</p>

                        <input type='radio' id='female' name='gender' value="female" 
                        onChange={()=>{
                            handleGender("female")
                        }}/>
                        <p htmlFor="female" className='gender-category'>Female</p>

                        <input type='radio' id='others' name='gender' value="others"
                        onChange={()=>{
                            handleGender("others")
                        }}/>
                        <p htmlFor="others" className='gender-category'>Others</p>
                    </div>
                <label>Mobile No</label>
                <input type="number" name="mobileNo" placeholder="Enter your mobile no" required />    
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email" required />
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password" required />
                <label>Confirm Password</label>
                <input type="password" name="password" placeholder="Enter your password" required />
                <div className='signup-btns'>
                    <button className='register-btn'>Register</button>
                    <button to="/" className='register-btn'>Cancel</button>
                </div>
                
            </form>                
        </div>
    </div>
  )
}
