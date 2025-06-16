import React, { useState } from 'react'
import "./pages.css"

export default function SignUp() {

    const [gender, setGender] = useState("male")

    function handleGender(value){
        setGender(value);
    }
  return (
    <div className='sign-up'>
        <div className="login-container">
                <form className="login-form">
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Enter your name' />
                    <label>Age</label>
                    <input type='number' name='age' placeholder='Enter your age' />
                    <label>Address</label>
                    <input type='text' name='address' placeholder='Enter your Full address' />
                    <label>Gender</label>
                        <div className='gender-option'>
                            <input type='radio' id='male' name='gender' value="male" 
                            onChange={()=>{
                                handleGender("male")
                            }}/>
                            <label htmlFor="male">Male</label>

                            <input type='radio' id='female' name='gender' value="female" 
                            onChange={()=>{
                                handleGender("male")
                            }}/>
                            <label htmlFor="female">Female</label>
                            
                            <input type='radio' id='others' name='gender' value="others"
                            onChange={()=>{
                                handleGender("male")
                            }}/>
                            <label htmlFor="others">Others</label>
                        </div>
                        
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" />
                </form>                
            </div>
    </div>
  )
}
