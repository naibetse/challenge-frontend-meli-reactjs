import React, {useEffect, useState} from 'react'

export const BreadCrumbs = ({categories}) => {
    

    const [breadcrumbs, setBreadcrumbs] = useState([]);
    
    useEffect(() => { 
        if (categories.length > 0) { 
            const paths = categories[0].path_from_root;
            setBreadcrumbs(paths);
        }
    }, [categories]);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {
                    breadcrumbs.map((breadcrumb, index) => {
                        return (
                            <li className="breadcrumb-item" key={index}>
                                {breadcrumb.name}
                            </li>
                        )
                    })
                }
            </ol>
        </nav>        
    )
}
