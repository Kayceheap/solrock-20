import React from "react";

function Project(props) {
    const {
        title,
        imgLocation,
        githubUrl
    } = props
    return (
        <div className="my-work">
            <p>{title}</p>
            <img className="projectImg" src={require(`../../assets/${imgLocation}`)}></img>
            <p>{githubUrl}</p>
        </div>
    )
}

export default Project;