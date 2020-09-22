import React from 'react';
import '../images/steve-johnson-1150048-unsplash.jpg';
import Typography from '@material-ui/core/Typography';

function Home(){
    let style = {
        'width': 'auto',
        'height': '100%',
        'opacity' : '.85'
    }
    let textStyle = {
        'fontWeight': 'bold',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)'
    }
    let container = {
        'position': 'relative',
        'textAlign': 'center',
    }
    let gridStyle = {
        'display': 'grid',
        'gridTemplateColumns': '1fr 1fr 1fr',
        'gridAutoRows': '100px',
        'columnGap': '2%'
    }
    return(
        <div>
            <div style={container}>
                <img style={style} className="main-event-img" alt="" src={require('../images/steve-johnson-1150048-unsplash.jpg')}/>
                <Typography variant="h2" style={textStyle}>Limited Time Gallery</Typography>
            </div>

            <div style={gridStyle}>
                <Typography style={{gridColumnStart: '1', gridColumnEnd: '4'}} variant="h3">Upcoming Events</Typography>
                <div style={{border: '1px solid black'}}>this is an event</div>
                <div style={{border: '1px solid black'}}>this is an event</div>
                <div style={{border: '1px solid black'}}>this is an event</div>
            </div>
        </div>
    )
}

export default Home;