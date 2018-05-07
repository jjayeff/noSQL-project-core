import { call, put, takeLatest } from 'redux-saga/effects'
import { getJSON, postJSON, API_SERVER } from '../utils/api'
import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILED,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED,
  CREATE_MOVIE,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILED,
  EDIT_MOVIE,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAILED,
  SREACH_TYPE_MOVIE,
  SREACH_TYPE_MOVIE_SUCCESS,
  SREACH_TYPE_MOVIE_FAILED,
  SREACH_GROUP_MOVIE,
  SREACH_GROUP_MOVIE_SUCCESS,
  SREACH_GROUP_MOVIE_FAILED
} from '../reduxModules/movie'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMovie(action) {
   try {   
      const json = yield call(getJSON, `${API_SERVER}/api/movies/`)
      yield put({ 
        type: FETCH_MOVIE_SUCCESS, 
        payload: json 
      })
   } catch (e) {
      yield put({ 
        type: FETCH_MOVIE_FAILED,
        message: e.message 
      })
   }
}

function* deleteMovie(action) {
  try {
     const json = yield call(getJSON, `${API_SERVER}/api/movies/delete/${action.payload}`)
     yield put({ 
       type: DELETE_MOVIE_SUCCESS, 
       payload: json 
     })
  } catch (e) {
     yield put({ 
       type: DELETE_MOVIE_FAILED,
       message: e.message 
     })
  }
}

function* createMovie(action) {
  try {
     const json = yield call(postJSON, `${API_SERVER}/api/movies/create`, action.payload)
     yield put({ 
       type: CREATE_MOVIE_SUCCESS, 
       payload: json 
     })
  } catch (e) {
     yield put({ 
       type: CREATE_MOVIE_FAILED,
       message: e.message 
     })
  }
}

function* editMovie(action) {
  try {
     const json = yield call(postJSON, `${API_SERVER}/api/movies/edit/${action.id}`, action.payload)
     yield put({ 
       type: EDIT_MOVIE_SUCCESS, 
       payload: json 
     })
  } catch (e) {
     yield put({ 
       type: EDIT_MOVIE_FAILED,
       message: e.message 
     })
  }
}

function* sreachTypeMovie(action) {
  try {
     const json = yield call(getJSON, `${API_SERVER}/api/movies/sreach/type/${action.payload}`)
     yield put({ 
       type: SREACH_TYPE_MOVIE_SUCCESS, 
       payload: json 
     })
  } catch (e) {
     yield put({ 
       type: SREACH_TYPE_MOVIE_FAILED,
       message: e.message 
     })
  }
}

function* sreachGroupMovie(action) {
  try {
     const json = yield call(getJSON, `${API_SERVER}/api/movies/sreach/group/${action.payload}`)
     yield put({ 
       type: SREACH_GROUP_MOVIE_SUCCESS, 
       payload: json 
     })
  } catch (e) {
     yield put({ 
       type: SREACH_GROUP_MOVIE_FAILED,
       message: e.message 
     })
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watchMovieSagas() {
  yield takeLatest(FETCH_MOVIE, fetchMovie),
  yield takeLatest(DELETE_MOVIE, deleteMovie),
  yield takeLatest(CREATE_MOVIE, createMovie),
  yield takeLatest(EDIT_MOVIE, editMovie),
  yield takeLatest(SREACH_TYPE_MOVIE, sreachTypeMovie),
  yield takeLatest(SREACH_GROUP_MOVIE, sreachGroupMovie)
}

export default watchMovieSagas