import React from 'react';

function About() {
    return ( 
    <div className = "About" >
        <div className = "About--img-container" >
            <img src = {
                require('../images/max-van-den-oetelaar-1150510-unsplash.jpg')
            } alt = "" / >
        <div className = "About--text-top wow fadeInDown" >
            Et sit nostrud Lorem eiusmod aute nulla eiusmod ut velit in deserunt minim aliqua.Lorem anim ea esse enim enim sit nostrud.Excepteur mollit eu ea fugiat minim nostrud officia.Laborum sit dolore sunt commodo commodo sit minim labore velit.Adipisicing sint proident excepteur officia occaecat. 
        </div> 
        <div className = "About--text-right wow fadeInDown" >
            Et sit nostrud Lorem eiusmod aute nulla eiusmod ut velit in deserunt minim aliqua.Lorem anim ea esse enim enim sit nostrud.Excepteur mollit eu ea fugiat minim nostrud officia.Laborum sit dolore sunt commodo commodo sit minim labore velit.Adipisicing sint proident excepteur officia occaecat. 
        </div> 
        <div className = "About--text-left wow fadeInDown" >
            Et sit nostrud Lorem eiusmod aute nulla eiusmod ut velit in deserunt minim aliqua.Lorem anim ea esse enim enim sit nostrud.Excepteur mollit eu ea fugiat minim nostrud officia.Laborum sit dolore sunt commodo commodo sit minim labore velit.Adipisicing sint proident excepteur officia occaecat. 
        </div> 
        </div> 
    </div>
    )
}

export default About;