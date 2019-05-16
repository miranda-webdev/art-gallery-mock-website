import React from 'react';

class Art extends React.Component {

    render(){
        return(
            <div className="Art">
                    <div className="Art-img wow fadeInDown" > 
                        <img src={require('../images/steve-johnson-1142639-unsplash.jpg')} alt=""/>
                    </div>
                    <div className="Art-img wow fadeInDown" > 
                        <img src={require('../images/steve-johnson-1206044-unsplash.jpg')} alt=""/>
                    </div>
                    <div className="Art-img wow fadeInDown" > 
                        <img src={require('../images/steve-johnson-1208417-unsplash.jpg')} alt=""/>
                    </div>
                    <div className="Art-img wow fadeInDown" > 
                        <img src={require('../images/steve-johnson-709266-unsplash.jpg')} alt=""/>
                    </div>
                    <div className="Art-img wow fadeInDown" > 
                        <img src={require('../images/steve-johnson-724163-unsplash.jpg')} alt=""/>
                    </div>
                    <div className="Art-img wow fadeInDown" > 
                        <img src={require('../images/steve-johnson-768590-unsplash.jpg')} alt=""/>
                    </div>
            </div>
        )
    }
}

export default Art;