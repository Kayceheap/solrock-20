import React from "react";
import Project from "../Project";

function Work() {
    return(
        <div>
            <Project
            projectUrl='https://kayceheap.github.io/run-buddy/'
            title='Run-Buddy'
            imgLocation='hero-bg.jpg'
            githubUrl='https://github.com/Kayceheap/run-buddy'
            ></Project>
            <Project
            projectUrl='https://hottiehotton.github.io/CashingOutofTown/'
            title='Cashing Out Of Town'
            imgLocation='cashing.png'
            githubUrl='https://hottiehotton.github.io/CashingOutofTown'
            ></Project>
            <Project
            projectUrl='https://my-movie-library-1.herokuapp.com/'
            title='My Movie Library'
            imgLocation='movie.jpg'
            githubUrl='https://my-movie-library-1.herokuapp.com'
            ></Project>
        </div>
    )
}

export default Work;