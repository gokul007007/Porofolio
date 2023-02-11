import React from 'react'
import js from '../images/js.png'
import './readmeCard.scss'

const ReadmeCard = () => {
  return (
    <div className='readmeCard m-5'>
        <div className="container pb-4" style={{overflowX: "auto", height: "400px"}} >
            <div className="readme-header d-flex border rounded-top align-items-center">
                <img src={js} alt="" />
                <h3 className=''>readme.js .</h3>
            </div>
            <div className="readme-hero border rounded-bottom">
                <span className='d-flex flex-column'>
                    <span>
                        <span className='p-4'>1</span>
                        <span className='p-1'>Im Gokul, a software engineer and freelancer based in Bengaluru, India.</span>
                    </span>
                    <span>
                        <span className='p-4'>2</span>
                    </span>
                    <span>
                        <span className='p-4'>3</span>
                        <span className='p-1'>I’m currently working at Innova am-tech: IT Services and IT Consulting, As a software developer, my experience and skills include designing, developing, and maintaining software applications using various programming languages and frameworks.</span>
                    </span>
                    <span>
                        <span className='p-4'>4</span>
                    </span>
                    <span>
                        <span className='p-4'>5</span>
                        <span className='p-1'>In addition to my professional experience, I also use my spare time to stay current in the industry by continuously learning new technologies and experimenting with them through personal projects and freelancing work.</span>
                        {/* <span>"spare" {}</span>  */}
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ReadmeCard