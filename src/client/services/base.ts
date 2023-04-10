import storage from '../utilities/storage';


const makeFetch = (url: string, info: any) => {
    return fetch(url, info);
}


const json = async (url: string, method: string, body?: { [key: string]: string }) => {
    const TOKEN = storage.getToken();
    const headers = {
        'Content-Type': 'application/json'
    }

    if (TOKEN) {
        headers['Authorization'] = `Bearer ${TOKEN}`;
    }

    const data = {
        method,
        headers,
        // body: JSON.stringify(body),
    }
    if (body && Object.keys(body).length !== 0) { //* check if body exists and is not an empty object
        data['body'] = JSON.stringify(body);
    }

    if (method === 'GET') {
        delete headers['Content-Type'];
        delete data['body'];
    }

    try {
        const fetchResponse = await makeFetch(url, data);
        const response = await fetchResponse.json();

        if (fetchResponse.ok) {
            return response;
        }
        else {
            console.error('[fetch error:]', response);
            throw new Error(response.error || response.message || 'something went wrong');
        }
    } catch (error) {
        throw error;
    }
}

export const get = (url: string) => {
    return json(url, 'GET');
}
export const post = (url: string, payload: { [key: string]: string }) => {
    return json(url, 'POST', payload);
}
export const put = (url: string, payload: { [key: string]: string }) => {
    return json(url, 'PUT', payload);
}
export const _delete = (url: string) => {
    return json(url, 'DELETE');
}