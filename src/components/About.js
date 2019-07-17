import React from 'react'; 

const About = (props) => {
    return (
        <div className="About">
            <p> Welcome to the about page of the company </p>
            <p> {props.executives[0].name} </p>
        </div>
    )
}

export default About; 