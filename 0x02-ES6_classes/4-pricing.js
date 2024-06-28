export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(i) {
    this._amount = i;
  }

  get currency() {
    return this._currency;
  }

  set currency(i) {
    this._currency = i;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
