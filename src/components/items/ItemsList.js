import React, { useContext } from 'react'
import { ItemCard } from './ItemCard';
import { ResultContext } from './../../helpers/ResultContext';
import { BreadCrumbs } from './../ui/breadcrumbs/BreadCrumbs';

export const ItemsList = ({location}) => {

    const { results } = useContext(ResultContext);
    const { items, categories } = results || [];
    
    return (
        <>
            <div className="container my-4">
                <BreadCrumbs categories={categories} /> 
            </div>
            <div className="container mb-5">
                {
                    items.map(item => {
                        return <ItemCard key={item.id} {...item}  />
                    })

                }
            </div>
        </>
    )

        
    
}
