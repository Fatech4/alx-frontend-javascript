export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getters
  get sqft() {
    return this._sqft;
  }
  set sqft(setSqft) {
    this._sqft = setSqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
