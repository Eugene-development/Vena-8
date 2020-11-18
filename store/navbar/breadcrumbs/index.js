export const state = () => ({
  breadcrumbs: 'Главная страница',
  breadcrumbsEndPoint: '',
//  массив пустой
});

export const actions = {

  get_breadcrumbs({ commit, state }, breadcrumbs) {
    // заполнение массива
    commit('BREAD', breadcrumbs[0]);
    commit('BREAD2', breadcrumbs[1]);
  },
};

export const mutations = {
  BREAD: (state, breadcrumbs) => state.breadcrumbs = breadcrumbs,
  BREAD2: (state, breadcrumbsEndPoint) => state.breadcrumbsEndPoint = breadcrumbsEndPoint,
};


export const getters = {
  breadcrumbs: state => state.breadcrumbs,
  breadcrumbsEndPoint: state => state.breadcrumbsEndPoint,
};
