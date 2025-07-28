import { React , useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


export default function Contact(){

    let navigate = useNavigate()

    const [feed, setFeed] = useState({
        name:"",
        email:"",
        message:""
    })

    const{name, email, message} = feed

    const onInputChange=(e)=>{
        setFeed({...feed,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/feedback", feed)
        alert("Message sent successfully!!!")
        navigate('/')
    }

    return(
        <div className="contact">
            <div class="contact-container">
                <h2>Contact Us</h2>
                <form class="contact-form">
        
                    <label for="name">Name<span>*</span></label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="enter name"  
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        required/>

                    <label for="email">Email<span>*</span></label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="enter email" 
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                        required />

                    <label for="message">Message<span>*</span></label>
                    <textarea 
                        className="form-message" 
                        name="message" 
                        id="message" 
                        placeholder="Write a message.." 
                        value={message}
                        onChange={(e)=>onInputChange(e)}
                        required/>

                    <button className="submit-btn" onClick={onSubmit}>Submit</button>
                    {/* <div class="submit-btn"> */}
                        {/* <input type="submit" className="submit-input" /> */}
                    {/* </div> */}
                </form>
            </div>
        </div>   
    )
}