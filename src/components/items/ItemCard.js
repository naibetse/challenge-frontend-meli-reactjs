import React from 'react'
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export const ItemCard = ({
    id,
    title,
    picture,
    price,
    condition,
    free_shipping
}) => {
    return (

        <Link className="card meli-card-product card-list" to={ `./items/${id}`}>
                <div className="row g-0">
                    <div className="col-md-2 text-center">
                        <div className="thumbnail">
                            <img src={picture} className="img-fluid thumb-sm" alt={title}/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row card-body p-4">
                            <div className="col-md-10">
                                <h2 className="card-title ">
                                    { title }
                                </h2>
                                <div className="card-price">
                                    <NumberFormat value={price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                { free_shipping && 
                                    <div className="card-freeshipping free">
                                        <span>Envío gratis</span>
                                    </div>
                                }
                            </div>
                            <div className="col-md-2">
                                <div className="card-condition">
                                    <span>{ `${condition === 'new' ? 'Nuevo' : 'Usado'}` }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Link>
    )
}
