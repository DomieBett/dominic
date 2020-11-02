export class Storage {
    static set(key, value) {
        return localStorage.setItem(key, value);
    }

    static get(key, value) {
        return localStorage.getItem(key);
    }
}
