import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { getItemById } from './../../services/items';
import { BreadCrumbs } from './../ui/breadcrumbs/BreadCrumbs';

const ItemDetails = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        getItemById(id).then(resp => {
            const { item, categories, description } = resp;
            setItem(item);
            setCategories(categories);
            setDescription(description);
        })
    }, [id]);

    
    return (
        <>
            <div className="container mt-3">
                <BreadCrumbs categories={categories} /> 
            </div>
            <div className="container mb-5 p-5 item-details">
                <div className="row">
                    <div className="col-md-8">
                        <div className="thumbnail text-center">
                            <img src={item?.picture} className="img-fluid thumb-md" alt={item?.title} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card meli-card-product rounded p-3">
                            <div className="card-body">
                                <div className="card-condition my-2">
                                    <span>{ `${item?.condition === 'new' ? 'Nuevo' : 'Usado'}` }</span>
                                    <span> | {item?.sold_quantity} vendidos.</span>
                                </div>
                                <h1 className="card-title mb-3">{item?.title}</h1>
                                <div className="card-price mb-2">
                                    <NumberFormat value={item?.price?.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                { item?.free_shipping && 
                                    <div className="card-freeshipping free mb-2">
                                        <figure aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15">
                                                <path fillRule="nonzero" d="M7.763 12.207a2.398 2.398 0 0 1-4.726 0H1.8a1.8 1.8 0 0 1-1.8-1.8V2.195a1.8 1.8 0 0 1 1.8-1.8h8.445a1.8 1.8 0 0 1 1.8 1.8v.568l3.322.035L18 6.821v5.386h-2.394a2.398 2.398 0 0 1-4.727 0H7.763zm-.1-1.2h3.182V2.195a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v8.212a.6.6 0 0 0 .6.6h1.337a2.399 2.399 0 0 1 4.526 0zm7.843 0H16.8V7.179l-2.086-3.187-2.669-.029v5.76a2.399 2.399 0 0 1 3.461 1.284zm-2.263 1.99a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396zm-7.843 0a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396z"></path>
                                            </svg>
                                        </figure>
                                        <span> Envío gratis</span>
                                    </div>
                                }
                                <hr />
                                <div className="card-actions d-grid gap-2">
                                    <button type="button" className="btn btn-primary btn-lg">Comprar ahora</button>
                                </div>

                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="md-12 mt-5 item-description">
                        <h2>Descripción</h2>
                        <p >{description}</p>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default ItemDetails
