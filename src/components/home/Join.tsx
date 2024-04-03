import React from 'react'
import "./Join.css"
const Join = () => {
    return (
        <div className='join_wrapper self-left content-left '>
            <div className="join_content">
                <h1 className=" satisfying leading-9 font-[700] pt-2 text-[rgb(68, 68, 68)] ">Get the most satisfying services</h1>
                <p className='pt-6 text-[1.3rem] description md:text-[1.6rem] md:leading-8 sm:pt-2' > At Riskout, we believe that the beauty of life lies in the little things that give us a better expression of ourselves, make us more social and connect emotionally. </p>
                <div className="button pt-4 ">
                    <button className='bg-red-500 mr-4  rounded text-white '>LEARN MORE</button>
                    <button className='bg-red-500 ml-4 rounded text-white  '>CONTACT US</button>
                </div>
            </div>
        </div>
    )
}

export default Join