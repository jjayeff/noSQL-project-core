export const FETCH_MOVIE = 'alex/FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'alex/FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILED = 'alex/FETCH_MOVIE_FAILED';
export const DELETE_MOVIE = 'alex/DELETE_MOVIE';
export const DELETE_MOVIE_SUCCESS = 'alex/DELETE_MOVIE_SUCCESS';
export const DELETE_MOVIE_FAILED = 'alex/DELETE_MOVIE_FAILED';
export const CREATE_MOVIE = 'alex/CREATE_MOVIE';
export const CREATE_MOVIE_SUCCESS = 'alex/CREATE_MOVIE_SUCCESS';
export const CREATE_MOVIE_FAILED = 'alex/CREATE_MOVIE_FAILED';
export const EDIT_MOVIE = 'alex/EDIT_MOVIE';
export const EDIT_MOVIE_SUCCESS = 'alex/EDIT_MOVIE_SUCCESS';
export const EDIT_MOVIE_FAILED = 'alex/EDIT_MOVIE_FAILED';
export const SREACH_TYPE_MOVIE = 'alex/SREACH_TYPE_MOVIE';
export const SREACH_TYPE_MOVIE_SUCCESS = 'alex/SREACH_TYPE_MOVIE_SUCCESS';
export const SREACH_TYPE_MOVIE_FAILED = 'alex/SREACH_TYPE_MOVIE_FAILED';
export const SREACH_GROUP_MOVIE = 'alex/SREACH_GROUP_MOVIE';
export const SREACH_GROUP_MOVIE_SUCCESS = 'alex/SREACH_GROUP_MOVIE_SUCCESS';
export const SREACH_GROUP_MOVIE_FAILED = 'alex/SREACH_GROUP_MOVIE_FAILED';

export const fetchMovie = () => ({
  type: FETCH_MOVIE,
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id
});

export const createMovie = (json) => ({
  type: CREATE_MOVIE,
  payload: json
});

export const editMovie = (id,json) => ({
  type: EDIT_MOVIE,
  id: id,
  payload: json
});

export const sreachTypeMovie = (type) => ({
  type: SREACH_TYPE_MOVIE,
  payload: type
});

export const sreachGroupMovie = (group) => ({
  type: SREACH_GROUP_MOVIE,
  payload: group
});

const initialState = {
  movieDb: [],
  error: '',
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
    return {
      ...state,
      movieDb: []
    };
    case FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        movieDb: action.payload,
        error: '',
      };
    }
    case FETCH_MOVIE_FAILED: 
    case DELETE_MOVIE:
    return {
      ...state,
    };
    case DELETE_MOVIE_SUCCESS: {
      return {
        ...state,
        movieDb: action.payload,
        error: '',
      };
    }
    case DELETE_MOVIE_FAILED:
    case CREATE_MOVIE:
    return {
      ...state,
      movieDb: [],
      error: '',
    };
    case CREATE_MOVIE_SUCCESS: {
      return {
        ...state,
        movieDb: action.payload,
        error: '',
      };
    }
    case CREATE_MOVIE_FAILED: 
    case EDIT_MOVIE:
    return {
      ...state,
      movieDb: [],
      error: '',
    };
    case EDIT_MOVIE_SUCCESS: {
      return {
        ...state,
        movieDb: action.payload,
        error: '',
      };
    }
    case EDIT_MOVIE_FAILED: 
    case SREACH_TYPE_MOVIE:
    return {
      ...state,
      movieDb: [],
    };
    case SREACH_TYPE_MOVIE_SUCCESS: {
      return {
        ...state,
        movieDb: action.payload,
        error: '',
      };
    }
    case SREACH_TYPE_MOVIE_FAILED: 
    case SREACH_GROUP_MOVIE:
    return {
      ...state,
      movieDb: [],
    };
    case SREACH_GROUP_MOVIE_SUCCESS: {
      return {
        ...state,
        movieDb: action.payload,
        error: '',
      };
    }
    case SREACH_GROUP_MOVIE_FAILED: 
    default:
      return state;
  }
};

export default reducer;