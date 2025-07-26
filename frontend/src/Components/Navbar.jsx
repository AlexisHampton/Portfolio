import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='bg-base-300 mx-auto p-4 w-screen'>
            <div>
                <Link to="/" className='card-title text-3xl '> Alexis Hampton</Link>
            </div>
            <div>
                <h4></h4>
            </div>
        </div>
    )
}

export default Navbar