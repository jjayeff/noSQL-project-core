import watchMovieSaga from './movieSagas';

export default function* rootSaga() {
    console.log('[API] using movie-api')
    yield [
      watchMovieSaga(),
    ];
}