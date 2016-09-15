import {showUnauthMessage, hideUnauthMessage} from './actions/ui';

const showSnackbar = (dispatch: Dispatch, message: string, options = { timeout: 4000 }) => {
    setTimeout(() => dispatch(hideUnauthMessage()), options.timeout)
    return dispatch(showUnauthMessage(message));
}

const fetchAndError = (req: Request): Promise<Response> => {
    return fetch(req)
        .then((res: Response) => {
            if (!res.ok) { return Promise.reject(res); }
            return res;
        });
}

const getJson = (url: string): Promise<Response> => {
    const options = {
        mode: 'cors',
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    }
    const req = new Request(url, options)
    return fetchAndError(req);
}

const postJson = (url: string, body: Object): Promise<Response> => {
    const options = {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(body)
    }
    const req = new Request(url, options)
    return fetchAndError(req);
}

export {
    showSnackbar,
    getJson,
    postJson
}
