import React from 'react';

class Art extends React.Component {
    constructor(){
        super();
        this.state = {
            colors: ['redDiv', 'blueDiv', 'yellowDiv'],
            // color_div: this.colors[Math.floor(Math.random()*3)] + ' Art-img',
            positioning: []
        }
    }

    render(){
        const colors = ['redDiv', 'blueDiv', 'yellowDiv'];
        return(
            <div className="Art">
                    <div className={colors[Math.floor(Math.random() * 3)] + ' Art-img'}> 
                        <img src={require('../images/steve-johnson-1142639-unsplash.jpg')} alt=""/>
                    </div>
                    <div className={colors[Math.floor(Math.random() * 3)] + ' Art-img'}> 
                        <img src={require('../images/steve-johnson-1206044-unsplash.jpg')} alt=""/>
                    </div>
                    <div className={colors[Math.floor(Math.random() * 3)] + ' Art-img'}> 
                        <img src={require('../images/steve-johnson-1208417-unsplash.jpg')} alt=""/>
                    </div>
                    <div className={colors[Math.floor(Math.random() * 3)] + ' Art-img'}> 
                        <img src={require('../images/steve-johnson-709266-unsplash.jpg')} alt=""/>
                    </div>
                    <div className={colors[Math.floor(Math.random() * 3)] + ' Art-img'}> 
                        <img src={require('../images/steve-johnson-724163-unsplash.jpg')} alt=""/>
                    </div>
                    <div className={colors[Math.floor(Math.random() * 3)] + ' Art-img'}> 
                        <img src={require('../images/steve-johnson-768590-unsplash.jpg')} alt=""/>
                    </div>
            </div>
        )
    }
}

export default Art;