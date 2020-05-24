import React from 'react';
import './Jumbotron.css';

export default function Jumbotron (props) {
    
    return (
    <div className="container justify-content-center">
        <div className="jumbotron jumbotron-fluid col-md-12">

            <div className='banner'>
            
            </div>

            <div className='banner'>
                <img src="../assets/images/htmlb.png" alt="coding banner" className="banner-img"></img>
            </div>

            <div id='css-img' className='banner'>

            </div>

            <div id='react-img' className='banner'>

            </div>

            <div id='mon-img' className='banner'>

            </div>

            <div id="jp-title" className='banner'>
            <h1 className="display-4 text-center text-white">Jean</h1>
            <h1 className="display-4 text-center text-white">Peel</h1>
            </div>
        </div> 
    </div>

    );
}