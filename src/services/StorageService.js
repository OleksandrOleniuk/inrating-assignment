export class StorageService {
  static key = 'users';

  static getArray() {
    return JSON.parse(localStorage.getItem(this.key))
  }

  static setArray(array) {
    localStorage.setItem(this.key, JSON.stringify(array));
  }
}
