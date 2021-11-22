class HTTP {
    static #API = 'https://jsonplaceholder.typicode.com/';

    get(endpoint) {
        return $.get(HTTP.#API + endpoint)
    }
}
