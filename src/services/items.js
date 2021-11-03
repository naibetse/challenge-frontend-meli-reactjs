export const getItems = async (term) => {
    const url = `http://localhost:5001/api/items/?q=${ encodeURI(term) }`;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    const response = await fetch( url, requestOptions );
    const data = await response.json();
    data.items = data.items.slice(0,4)
    return data;
}

export const getItemById = async (id) => {
    const url = `http://localhost:5001/api/items/${id}`;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    try {
        const response = await fetch( url, requestOptions );
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error)
    }
}

