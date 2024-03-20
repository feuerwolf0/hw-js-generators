export default class Team {
    constructor() {
        this.chars = new Array();
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.chars.length; i++) {
            yield this.chars[i];
        }
    }
}