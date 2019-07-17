import React from 'react'; 

const About = (props) => {
    const executives = props.personnel.executives.map( ninja => {
        return (
            <div className="Executive" key={ninja.name}> 
                <p> {ninja.name} </p> 
                <p> {ninja.role} </p> 
                <p> Years at Company: {ninja['years at company']} </p>
                <br /> 
            </div>
        )
    })
    return (
        <div className="About">
            <p> Welcome to the about page of the company </p>
            <p> Solutions Tech Inc was founded in 1968 as a software company with a 
                vision to provide convenient solutions for short term web applicaiton
                projects. 

                Since then we have expanded into mobile applications, cloud computer, and artifical intelligence. 
                We truly have a vision to simplify the technological infastructure of every startup 
                company on earth 
            </p>
            Meet our team: 
            <h2> Executives: </h2> 
            {executives}
            
        </div>
    )
}

export default About; 