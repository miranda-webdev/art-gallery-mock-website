import React from 'react';

function LandingPage () {
    return (
        <div className="LandingPage">
            <div className="LandingPage-container">
                <div className="LandingPage--img-container redDiv">
                    <img src={require('../images/roman-kraft-383581-unsplash.png')} alt="Brushes by Roman Kraft on Unsplash"/>
                </div>
                <div className="LandingPage-intro-container blueDiv">
                    <h1 className="LandingPage-header">Art Gallery</h1>
                    <h2 className="LandingPage-subheader">Lorem laborum non proident nostrud excepteur quis labore dolor.</h2>
                    <p className="LandingPage-paragraph">Lorem laborum non proident nostrud excepteur quis labore dolor. Irure excepteur non et nisi labore deserunt consectetur ipsum do pariatur culpa aute nisi. Et eu occaecat tempor aute id sunt amet dolore esse labore excepteur elit id aliqua. Lorem laborum non proident nostrud excepteur quis labore dolor. Irure excepteur non et nisi labore deserunt consectetur ipsum do pariatur culpa aute nisi. Et eu occaecat tempor aute id sunt amet dolore esse labore excepteur elit id aliqua.</p>
                </div>
                <a href="/art/" className="LandingPage-btn yellowDiv fadeInDown" aria-label="Explore some art">Explore!</a>
            </div>
            
        </div>
    )
}

export default LandingPage;