import React from 'react';

function Contact () {
    return (
        <div className="Contact">
            <div className="blueDiv Contact-ad">
                <h1>Want a website like this?</h1>
                <p>I can customize it to your style and your needs!</p>
                <p>If there's something else you're looking for just let me know and we can go over some options!</p>
            </div>
            <div className="redDiv Contact-div">
                <h2 className="Contact-header">Contact Me!</h2>
                <div className="Contact-info">   
                    <p>Email: miranda.manriquez.dev@gmail.com</p>
                    <p>Cell: ( 480 ) 249 - 5816</p>
                    <p>Hours: 9am - 6pm Arizona Time</p>
                    <p>Website: <a href="https://www.miranda-manriquez.dev/" rel="noopener noreferrer" to target="_blank" className="Contact-link">miranda-manriquez.dev</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;