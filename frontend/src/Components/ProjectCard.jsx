import React, { useState } from 'react'


const ProjectCard = () => {
    const [isSummary, setIsSummary] = useState(true);
    const [isDetails, setIsDetails] = useState(false);
    const [isChallenges, setIsChallenges] = useState(false);


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



    return (
        <div className='card bg-base-300 mx-20'>
            <div className='card-body'>
                <div className='flex justify-between'>
                    {/* Screenshots */}
                    <div className='mx-2'>
                        <img src={'/Simulation/Screenshot1.png'} alt="ewrwr" className='max-w-md' />
                        <div className='mt-3 flex justify-center'>
                            <button className='btn btn-accent flex items-center'> prev </button>
                            <button className='btn btn-accent'> next </button>
                        </div>
                    </div>

                    {/* Project Information */}
                    <div className='mx-2'>
                        <button onClick={handleOnSummary} className='btn btn-outline btn-secondary'>
                            Summary
                        </button>

                        <button onClick={handleOnDetails} className='btn btn-outline btn-secondary'>
                            Details
                        </button>
                        <button onClick={handleOnChallenges} className='btn btn-outline btn-secondary'>
                            Challenges
                        </button>

                        {isSummary && <h3 className='p-2'> summary goes here </h3>}
                        {isDetails && <h3 className='p-2'> details goes here </h3>}
                        {isChallenges && <h3 className='p-2'> challenges goes here </h3>}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard