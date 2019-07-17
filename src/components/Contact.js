import React from 'react'; 

const Contact = () => {
    return (
        <div className="Contact">
            <p> Welcome to the Contact page of the company. Please fill out the details below and we will respond to your inquiry shortly. </p>
            <form action="/thankyou"> 
                Name: <input type="text" /> <br />
                Email <input type="email" /> <br />
                Company: <input type="text" /> <br />
                Reason for Contact: <textarea> </textarea> <br />
                <input type="submit" />
            </form> 

        </div>
    )
}

export default Contact; 