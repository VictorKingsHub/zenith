"use client"
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import "./VideoSection.css"

const VideoSection = () => {
  return (
    <div className='background-video-container'>
{/* 
      <iframe width="100%" height="450" src="https://www.youtube.com/embed/vEhzzIMuE8I?si=tyajpcSjzZp7Mt4q" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

      <video poster='mma2.jpg' width="100vw" height="400vh">
        <source  src='video.mp4' type='video/mp4'/>
      </video>
      
      <h1 className='h1'>we are the best travel and educational consulting company</h1>
      <h2 className='h2'>Give us a try today</h2>
    </div>

    
  )
}

export default VideoSection
