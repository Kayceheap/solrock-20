import React from "react";

function About() {
    return (
        <div className="me-section">
            <img className="my-photo" src={require(`../../assets/IMG_8226.png`)} />
            <p className="my-info">Hello! My name is Kayce Heap and I am a full stack web developer. I was born and raised in San Diego and love the ocean!
                I have an amazing family that consist of myself, my husband and we have seven children. Life is so beautiful when we are all together!
                I spent most of my adult years in the cosmetology world. I managed my own salon for several years. Before that, I was a professional ballet 
                dancer for many years. I have always thrived the in the arts world, and my love of the arts will always be one of my first loves.
                Designing things and making them better and more beautiful is my goal and passion.
            </p>
        </div>

    )
}

export default About;