import React from 'react'
import js from '../images/js.png'

const ReadmeCard = () => {
  return (
    <div className='readmeCard m-4'>
        <div className="container pb-4">
            <div className="readme-header d-flex border rounded-top align-items-center">
                <img src={js} alt="" />
                <h3 className=''>readme.js .</h3>
            </div>
            <div className="readme-hero border rounded-bottom">
                <span className='d-flex flex-column '>
                    <span>
                        <span className='p-4'>1</span>
                        <span className='p-1'>Im Gokul, a software engineer and entrepreneur based </span>
                    </span>
                    <span>
                        <span className='p-4'>2</span>
                    </span>
                    <span>
                        <span className='p-4'>3</span>
                        <span className='p-1'>I’m currently working at Innova am-tech: IT Services and IT Consulting </span>
                    </span>
                    <span>
                        <span className='p-4'>4</span>
                    </span>
                    <span>
                        <span className='p-4'>5</span>
                        <span className='p-1'>During my </span>
                        <span>"spare"</span>
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ReadmeCard