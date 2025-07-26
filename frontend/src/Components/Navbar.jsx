import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='bg-base-300  mx-auto p-4  flex justify-between'>
            <Link to="/" className='card-title text-3xl '> Alexis Hampton</Link>
            <div>
                <a className='link link-neutral mx-2' href="https://github.com/AlexisHampton" target='blank'>Github</a>
                <a className='link link-neutral mx-2' href="https://github.com/xXClawtheWolfXx" target='blank'>Personal Github</a>
                <a className='link link-neutral mx-2' href="https://severedstars.itch.io/" target='blank'>Game Portfolio</a>
                <a className='link link-neutral mx-2' href="https://www.linkedin.com/in/alexis-hampton/" target='blank'>LinkedIn</a>
            </div>
        </div>
    )
}

export default Navbar