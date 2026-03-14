import { useState } from "react";
import "../styles/contact.css"

function Contact(){

const [formData, setFormData] = useState({
  name:"",
  email:"",
  message:""
})

const handleChange = (e)=>{
  const {name, value} = e.target;

  setFormData({
    ...formData,
    [name]:value
  })
}

const handleSubmit = (e)=>{
  e.preventDefault();

  localStorage.setItem("contactData", JSON.stringify(formData))

  alert("Data Saved in Local Storage")

  setFormData({
    name:"",
    email:"",
    message:""
  })
}

return(

<div className="container">

<h1>Contact Us</h1>

<form className="contact-form" onSubmit={handleSubmit}>

<input 
type="text" 
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
/>

<input 
type="email" 
name="email"
placeholder="Your Email"
value={formData.email}
onChange={handleChange}
/>   


<textarea 
name="message"
placeholder="Your Message"
value={formData.message}
onChange={handleChange}
/>

<button type="submit">Send Message</button>

</form>

</div>

)

}

export default Contact