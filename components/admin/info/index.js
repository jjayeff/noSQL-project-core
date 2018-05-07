import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie, deleteMovie } from '../../../reduxModules/movie'
import Info from './Info'

const mapStateToProps = (state) => {
    return ({
        movies: state.movies.movieDb
    })
}

class Index extends Component {
    componentDidMount() {
        this.props.fetchMovie()
    }
    render() {
        return (
            <div className='container' style={{paddingTop:'80px'}}>
                <div className='row'>
                    <Info title={this.props.title} data={this.props}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { fetchMovie, deleteMovie })(Index)