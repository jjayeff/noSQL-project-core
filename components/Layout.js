import React, { Component } from 'react';
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Head from 'next/head'
import reducer from '../reduxModules';
import rootSaga from '../sagas';
import Navbar from './Navbar'
import '../css/style.css'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

export default class Layout extends Component {
  render() {
    sagaMiddleware.run(rootSaga); 
    return (
      <Provider store={store}>
        <div>
          <Head>
              <title>{this.props.title}</title>
              <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
              <link rel="icon" type="image/jpg" href="https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png" />
              <link rel="stylesheet" href="/_next/static/style.css" />
          </Head>
          <Navbar type={this.props.type}/>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}