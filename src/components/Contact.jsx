import React from 'react'
import './innerCss/contact.css'


let submit = (e) =>{
    e.preventDefault();
}

const Contact = () => {
    return (
        <>

            <div className='contact'>
            <h2>We listen you.</h2>


<div className='contactform' onSubmit={submit}>
    <form>
        <input type='text' placeholder='Your name'/><br/>
        <input type='email' placeholder='Your email'/><br/>
        <input type='number' placeholder='Your phone number'/><br/>
        <textarea placeholder='Your message' /><br/>
<input type='submit' />


    </form>
</div>
            </div>
        </>
    )
}

export default Contact
