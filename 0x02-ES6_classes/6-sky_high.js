import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  evacuationWarningMessage() {
    this.message = 'Evacuate slowly the NUMBER_OF_FLOORS floors';
    return this.message;
  }
}
