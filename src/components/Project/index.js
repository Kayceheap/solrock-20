import React from "react";

function Project(props) {
    const {
        title,
        imgLocation,
        githubUrl,
        projectUrl
    } = props

    const openProjectUrl=({projectUrl}) => {
        console.log(projectUrl)
        window.open(projectUrl,"_blank")
    }

    const openUrl=({githubUrl}) => {
        console.log(githubUrl)
        window.open(githubUrl,"_blank")
    }
    return (
        <div className="my-work">
            <button className="project-title"  onClick={()=>openProjectUrl({projectUrl})}>{title}</button>
            <img className="projectImg" onClick={()=>openUrl({githubUrl})} src={require(`../../assets/${imgLocation}`)}></img>
            <p>{githubUrl}</p>
        </div>
    )
}

export default Project;