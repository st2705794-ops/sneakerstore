import { useState } from "react"
import "../styles/contact.css"

function Contact(){

const [formData,setFormData] = useState({
name:"",
email:"",
message:""
})

function handleChange(e){
setFormData({
...formData,
[e.target.name]:e.target.value
})
}

function handleSubmit(e){
e.preventDefault()

localStorage.setItem("contactData",JSON.stringify(formData))

alert("Message Saved Successfully ✅")

setFormData({
name:"",
email:"",
message:""
})
}

return(

<div className="contact-container">

<form className="contact-form" onSubmit={handleSubmit}>

<h2>Contact Us</h2>

<input
type="text"
name="name"
placeholder="Enter your name"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Enter your email"
value={formData.email}
onChange={handleChange}
required
/>

<textarea
name="message"
placeholder="Enter your message"
value={formData.message}
onChange={handleChange}
required
/>

<button type="submit">Send Message</button>

</form>

</div>

)

}

export default Contact