import React, { useState } from 'react'


const ProjectCard = ({ project }) => {
    const [isSummary, setIsSummary] = useState(true);
    const [isDetails, setIsDetails] = useState(false);
    const [isChallenges, setIsChallenges] = useState(false);
    const [currProjectImg, setCurrProjectImg] = useState(0);
    const [currChallengeText, setCurrChallengeText] = useState(0);


    function handleOnSummary() {
        setIsChallenges(false);
        setIsDetails(false);
        setIsSummary(true);
    }

    function handleOnDetails() {
        setIsChallenges(false);
        setIsDetails(true);
        setIsSummary(false);
    }
    function handleOnChallenges() {
        setIsChallenges(true);
        setIsDetails(false);
        setIsSummary(false);
    }

    function handleScreenshotImageChange(canIncrease) {
        let currProjImg = currProjectImg;
        if (canIncrease)
            currProjImg += 1;
        else
            currProjImg -= 1;
        if (currProjImg < 0)
            currProjImg = project.screenshots.length - 1;
        setCurrProjectImg(currProjImg % project.screenshots.length);
    }

    function handleChallengeTextChange(canIncrease) {

        if (canIncrease)
            setCurrChallengeText((currChallengeText + 1) % project.challenges.length);
        else
            setCurrChallengeText((currChallengeText - 1) % project.challenges.length);
    }



    return (
        <div className='card bg-base-300 mx-20 min-h-full min-w-0 my-5'>
            <div className='card-body w-full'>
                <h3 className='card-title text-2xl '> {project.name} </h3>
                <div className='md:flex md:justify-between'>

                    {/* Screenshots */}
                    <div className='mx-2 w-1/2'>
                        <img src={project.screenshots[currProjectImg]} alt={project.screenshotAlts[currProjectImg]} className=' object-cover  rounded-2xl' />
                        <div className='my-3 flex justify-center'>
                            <button className='btn btn-accent flex items-center mx-2' onClick={() => handleScreenshotImageChange(false)}> prev </button>
                            <button className='btn btn-accent mx-2' onClick={() => handleScreenshotImageChange(true)}> next </button>
                        </div>
                    </div>

                    {/* Project Information */}
                    <div className='w-1/2'>
                        <div className='card mx-2 p-3 bg-base-100 min-h-10/12'>
                            <div className='md:flex md:justify-center'>
                                <button onClick={handleOnSummary} className='btn btn-outline btn-secondary px-6 '>
                                    Summary
                                </button>

                                <button onClick={handleOnDetails} className='btn btn-outline btn-secondary px-6'>
                                    Details
                                </button>
                                <button onClick={handleOnChallenges} className='btn btn-outline btn-secondary px-6'>
                                    Challenges
                                </button>
                            </div>
                            <div className=''>
                                {isSummary && <h3 className='p-2 whitespace-pre-line'>{project.summary}</h3>}
                                {isDetails && <div className='p-2'>
                                    <h3> Date Created: {project.date} </h3>
                                    <h3> Tech Stack: {project.techStack}</h3>
                                    <h3> Github: <a className='text-secondary link' target='blank' href={project.github}> {project.github} </a></h3>
                                    {project.deployed && <h3> Deployed Link: <a className='text-error link' target='blank' href={project.deployed}> {project.deployed}</a> </h3>}
                                </div>}
                                {isChallenges &&
                                    <h3 className='p-2 text-wrap'> {project.challenges[currChallengeText]} </h3>}
                            </div>


                        </div>
                        {isChallenges &&
                            <div className='mt-3 flex justify-center'>
                                <button className='btn btn-ghost btn-info' onClick={() => handleChallengeTextChange(false)}> Previous </button>
                                <button className='btn btn-ghost btn-info' onClick={() => handleChallengeTextChange(true)}> Next</button>
                            </div>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard