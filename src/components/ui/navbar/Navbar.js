import React from 'react'
import { SearchBox } from '../../search/SearchBox'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__large_plus.png'} alt="Mercado Libre logo" height="34" />
                </a>
                <SearchBox />
            </div>

        </nav>
    )
}

export default Navbar
