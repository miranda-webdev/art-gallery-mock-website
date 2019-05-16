import React from 'react';

function LandingPage () {
    return (
        <div className="LandingPage">
            <div className="LandingPage-container">
                <div className="LandingPage-intro-container wow fadeInDown redDiv" >
                    <h1 className="LandingPage-header">Art Gallery</h1>
                    <h2 className="LandingPage-subheader">Lorem laborum non proident nostrud excepteur quis labore dolor.</h2>
                    <p className="LandingPage-paragraph">Lorem laborum non proident nostrud excepteur quis labore dolor. Irure excepteur non et nisi labore deserunt consectetur ipsum do pariatur culpa aute nisi. Et eu occaecat tempor aute id sunt amet dolore esse labore excepteur elit id aliqua. Lorem laborum non proident nostrud excepteur quis labore dolor. Irure excepteur non et nisi labore deserunt consectetur ipsum do pariatur culpa aute nisi. Et eu occaecat tempor aute id sunt amet dolore esse labore excepteur elit id aliqua.</p>
                </div>
                <a href="/art/" className="LandingPage-btn wow fadeInDown blueDiv" aria-label="Explore some art">Explore!</a>
            </div>
            
        </div>
    )
}

export default LandingPage;