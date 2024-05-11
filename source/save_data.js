/**
 * Save data to local storage.
 *
 * @param data {Object.<string, string>} - Data to save, a map between keys and values.
 */
export function saveData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

/**
 * Get data from local storage.
 * @returns {Object.<string, string> | undefined} - Data from local storage.
 */
export function getData() {
    const data = localStorage.getItem('data');
    if (data) {
        return JSON.parse(data);
    }
    return undefined;
}
