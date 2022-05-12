import React, { useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';

function CardComponent(props) { 
    return (
        <div className="card col-4 m-2">
            <div className='text-center p-4'>
                <img src={props.urlToImage} className="card-img-top laptop-image" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Processor : {props.processor}</p>
                <p className="card-text">Hard Drive : {props.hardDrive}</p>
                <p className="card-text">Ram : {props.ram}</p>
                <p className="card-text"> <CountdownTimer targetDate={props.date} /></p>
                <div className='text-center'>
                    <a className="btn btn-primary">Buy Laptop</a>

                </div>
            </div>
        </div>
    )
}

export default CardComponent;