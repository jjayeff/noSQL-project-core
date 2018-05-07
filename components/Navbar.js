import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { fetchMovie, sreachGroupMovie } from '../reduxModules/movie'
import {
  CARTOON,
  US,
  ASIAN,
  EPISODE,
  LATEST,
  LIKEST,
  IMDB
} from '../texts'
import { navbarUser, navbarAdmin } from '../data'

const mapStateToProps = (state) => {
  return ({
      movies: state.movies.movieDb
  })
}

class Navbar extends React.Component {
  hendleClick(group) {
    if(group && group.name != 'ข้อมูลหนังทั้งหมด' && group.name != 'เพิ่มหนัง') {
      this.props.sreachGroupMovie(group.name)
      Router.push({
          pathname: group.link,
          query: { group: group.name }
      })
    } else if(group.name === 'ข้อมูลหนังทั้งหมด' || group.name === 'เพิ่มหนัง') {
        this.props.fetchMovie()
        Router.push({
            pathname: group.link,
        })
    } else {
        this.props.fetchMovie()
          Router.push({
              pathname: '/',
          })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault() // หยุดการทำงาน Submit
    const name = e.target.name.value
  }
  renderComponent(type) {
    let groups = [];
    (type == 'user') ? groups = navbarUser : groups = navbarAdmin
    return groups.map((group, i) =>
      <li className='nav-item' key={i}>
        <a className='nav-link' style={{cursor: 'pointer'}} onClick={this.hendleClick.bind(this,group)}>{group.name}</a>
      </li>
    )
  }
  render(){
    return (
      <nav className='navbar navbar-expand-lg fixed-top navbar-light bg-light'>
        <div className='container'>
            <a className='navbar-brand' style={{cursor: 'pointer'}} onClick={this.hendleClick.bind(this, '')}>
              <img src='https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png' width='30' height='30' className='mr-1'/>
              ระบบข้อมูลหนัง
            </a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor03' aria-controls='navbarColor03' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarColor03'>
            <ul className='navbar-nav mr-auto'>
              {this.renderComponent(this.props.type)}
            </ul>
            <form className='form-inline my-2 my-lg-0' onSubmit={(e) => handleSubmit(e)}>
              <input className='form-control mr-sm-2' type='text' placeholder='ค้นหา' name='name' />
              <button className='btn btn-success my-2 my-sm-0' type='submit'>ค้นหา</button>
            </form>
          </div>
        </div>
      </nav>
      )
  }
}

export default connect(mapStateToProps, { fetchMovie, sreachGroupMovie })(Navbar)