import React, { useState } from 'react'
import axios from "axios"
import "./pages.css"

export default function SignUp() {

    const [gender, setGender] = useState();

    const[user, setUser] = useState({
        name : "",
        age : "",
        address : "",
        gender : "",
        mobileNo: "",
        email: "",
        username: "",
        password: ""
    })

    const{name, age, address, mobileNo, email, username, password} = user

    const onInputChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user/register",user)
    }

    // function handleGender(value){
    //     setGender(value);
    // }
  return (
    <div className='sign-up'>
        <div className="login-container">
            <h2>Sign Up</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                <label>Name</label>
                <input type='text' name='name' value={name} placeholder='Enter your name' onChange={(e)=>onInputChange(e)} required />
                <label>Age</label>
                <input type='number' name='age' value={age} placeholder='Enter your age' onChange={(e)=>onInputChange(e)} required />
                <label>Address</label>
                <input type='text' name='address' value={address} placeholder='Enter your Full address' onChange={(e)=>onInputChange(e)} required />
              
                {/* <select name="gender" onChange={(e)=>onInputChange(e)} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br /> */}

                <div>
                    <label>Gender</label>
                    <div className='gender-option'>
                                           
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={user.gender === 'Male'} 
                            onChange={(e)=>onInputChange(e)}
                        />
                        <p htmlFor="male" className='gender-category'>Male</p>
                                          
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={user.gender === 'Female'} 
                            onChange={(e)=>onInputChange(e)}
                        />
                        <p htmlFor="female" className='gender-category'>Female</p>
                                       
                        <input 
                            type="radio"
                            name="gender"
                            value="others"
                            checked={user.gender === 'Others'} 
                            onChange={(e)=>onInputChange(e)}
                        />
                        <p htmlFor="others" className='gender-category'>Others</p>
                        

                        {/* <input type='radio' id='female' name='gender' value="female" 
                        onChange={()=>{
                            handleGender("female")
                        }}/>
                        <p htmlFor="female" className='gender-category'>Female</p>

                        <input type='radio' id='others' name='gender' value="others"
                        onChange={()=>{
                            handleGender("others")
                        }}/>
                        <p htmlFor="others" className='gender-category'>Others</p> */}
                    </div>
                </div>
                <label>Mobile No</label>
                <input type="number" name="mobileNo" value={mobileNo} placeholder="Enter your mobile no" onChange={(e)=>onInputChange(e)} required />    
                <label>Email</label>
                <input type="email" name="email" value={email} placeholder="Enter your email" onChange={(e)=>onInputChange(e)} required />
                <label>Username</label>
                <input type="text" name="username" value={username} placeholder="Enter your username" onChange={(e)=>onInputChange(e)} required />
                <label>Password</label>
                <input type="password" name="password" value={password} placeholder="Enter your password" onChange={(e)=>onInputChange(e)} required />
                <label>Confirm Password</label>
                <input type="password" name="password" placeholder="Enter your password" />
                <div className='signup-btns'>
                    <button className='register-btn'>Register</button>
                    <button to="/" className='register-btn'>Cancel</button>
                </div>
                
            </form>                
        </div>
    </div>
  )
}
