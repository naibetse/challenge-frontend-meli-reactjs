import { useLocation } from 'react-router-dom';
import { useMemo, useContext } from 'react';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';

import { ResultContext } from './../../helpers/ResultContext'
import { getItems } from '../../services/items';

import history from '../../helpers/history';


export const SearchBox = () => {

    const location = useLocation();
        
    const { search = '' } = queryString.parse(location.search);
    
    const { setResults } = useContext(ResultContext);

    const [ formValues, handleInputChange ] = useForm({
        searchText: search
    });

    useMemo(async () => {
        const data = await getItems(formValues.searchText);
        setResults(data);
    }, [search]);

    const { searchText } = formValues;

    const handleSearch = async (e) => {
        
        e.preventDefault();

        if(searchText.length > 0) {
            history.replace(`/items?search=${searchText}`);
        } else {
            history.replace('/');
        }
    }

    return (
        <form className="nav-search d-flex" onSubmit={handleSearch}>
            <input 
                type="search"
                placeholder="Buscar productos, marcas y más..."
                className="nav-search-input"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ handleInputChange }
            />

            <button type="submit" className="nav-search-btn">
                <figure aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 18 15">
                        <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                    </svg>
                </figure>	
            </button>
        </form>
    )
}
