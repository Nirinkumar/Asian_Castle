export default function Contact(){
    return(
        <div className="contact">
            <div class="contact-container">
                <h2>Contact Us</h2>
                <form class="contact-form">
        
                    <label for="name">Name<span>*</span></label>
                    <input type="text" name="name" id="name" placeholder="enter name" required/>

                    <label for="email">Email<span>*</span></label>
                    <input type="email" name="email" id="email" placeholder="enter email" required />

                    <label for="message">Message:</label>
                    <textarea className="form-message" name="message" id="message" placeholder="Write a message.." />

                    <button className="submit-btn">Submit</button>
                    {/* <div class="submit-btn"> */}
                        {/* <input type="submit" className="submit-input" /> */}
                    {/* </div> */}
                </form>
            </div>
        </div>   
    )
}