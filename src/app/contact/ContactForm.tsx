import React from 'react'
import "./contactForm.css"

const ContactForm = () => {
    return (
        <form action="" className='from-wrapper container  gap-5'>
            <div className="name flex flex-col text-left gap-1 mt-2">
                <label htmlFor="name" className='text-sm'> Full Name</label>
                <input type="text" name="name" placeholder='Enter your name' className='text-sm'/>
            </div>
            <div className="email flex flex-col text-left gap-1 mt-2">
                <label htmlFor="email" className='text-sm'> Full Name</label>
                <input  type="email" name="email" placeholder='Enter your email' className='text-sm'/>
            </div>
            <div className=" mt-1 message flex flex-col text-left gap-1">
                <label htmlFor="message" className='text-sm m-0 p-0'>Your Message</label>
                <textarea name="textarea" className='text-sm h-32 pt-0 mt-0' placeholder='type your message here' cols={30} rows={10}></textarea>
            </div>
            <button type="submit" className=' py-2 px-6 my-2 mx-10 rounded text-white  text-sm btn bg-teal-900'> Submit</button>
            <div className="notification mt-1 flex flex-col text-left bg-slate-100">
                <h5 className='text-red-500 px-5 py-2 text-sm'>Message</h5>
            </div>
        </form>
    )
}

export default ContactForm
