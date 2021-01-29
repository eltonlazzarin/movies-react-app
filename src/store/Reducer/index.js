const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case 'SET_SEARCH_MOVIE':
      return {
        ...state,
        search: action.payload,
      };

    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };

    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };

    case 'SET_SINGLE_MOVIE':
      return {
        ...state,
        singleMovie: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
