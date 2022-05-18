import { createElement } from '@/render.js';

const createTripSortOfferTemplate = () =>(
  `<div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">
    <label class="trip-sort__btn" for="sort-offer">Offers</label>
  </div>`
);

export default class TripSortOfferView {
  getTemplate() {
    return createTripSortOfferTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}