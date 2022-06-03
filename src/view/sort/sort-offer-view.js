import AbstractView from '@/framework/view/abstract-view';

const createSortOfferTemplate = () =>(
  `<div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">
    <label class="trip-sort__btn" for="sort-offer">Offers</label>
  </div>`
);

export default class SortOfferView extends AbstractView {

  get template() {
    return createSortOfferTemplate();
  }
}
