import React from 'react';
import ItemListContainer from './ItemListContainer';

const CardWidget = () => {
    return (
        <div>
            <div className="card" style={{width: '5rem'}}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <ItemListContainer />
                </div>
            </div>
        </div>
    );
}

export default CardWidget;
