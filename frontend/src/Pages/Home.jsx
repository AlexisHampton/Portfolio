import React from 'react'
import Navbar from '../Components/Navbar'
import ProjectCard from '../Components/ProjectCard'

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* Summary statement*/}
            <div className='flex mx-auto justify-center mt-10'>
                <div className='card bg-base-200 mx-20'>
                    <div className='card-body text-center'>
                        <h1 className='font-bold text-7xl text-center'> Alexis Hampton</h1>

                        <h4 className='text-center text-3xl'> Aspiring Software Developer</h4>
                        <h3 className='text-lg'> Detail-oriented Computer Science graduate with a strong interest in backend development and building scalable, maintainable solutions that keep customers first. Experienced with the MERN and .NET stacks and adept at designing RESTful APIs. Eager to apply my technical expertise in a collaborative environment that values continuous learning and innovation. </h3>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className='flex mx-auto justify-center mt-10'>
                {/* Screenshots*/}
                <ProjectCard />
            </div>



        </div>
    )
}

export default Home