function evacuationWarningMessage() {
  return new Error('Class extending Building must override evacuationWarningMessage');
}

let swap = 0;
let maxSqft = 0;
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be number');
    } else if (swap === 1 && maxSqft < sqft) {
      return evacuationWarningMessage();
    } else {
      this._sqft = sqft;
      if (swap === 0) {
        maxSqft = this._sqft;
        swap = 1;
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be number');
    } else if (swap === 1 && maxSqft < sqft) {
      return evacuationWarningMessage();
    } else {
      this._sqft = sqft;
    }
  }
}
