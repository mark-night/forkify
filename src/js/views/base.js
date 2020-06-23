export const elements = {
  searchInput: document.querySelector('input.search__field'),
  searchForm: document.querySelector('form.search'),
  recipeListParent: document.querySelector('div.results'),
  recipeList: document.querySelector('ul.results__list'),
  paginationBtnParent: document.querySelector('div.results__pages'),
  recipeDetail: document.querySelector('div.recipe')
};

export const selectors = {
  loader: 'div.loader',
  recipes: 'a.results__link',
  recipeServings: 'span.recipe__info-data--people',
  recipeIngredientCount: 'div#recipe__count-'
};

export const classStrings = {
  recipeHighlight: 'results__link--active',
  btnIncrease: 'btn-increase',
  btnDecrease: 'btn-decrease'
};

export const renderLoader = parent => {
  const loader = `
    <div class="${selectors.loader.split('.')[1]}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const removeLoader = () => {
  const loader = document.querySelector(selectors.loader);
  // removeChild() approach seems to be more complex than remove(),
  // it is supported by more older browsers. The results are identical.
  if (loader) loader.parentElement.removeChild(loader);
};
