import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie, sreachTypeMovie, sreachGroupMovie } from '../../reduxModules/movie'
import Left from './Left'
import Right from './Right'

const mapStateToProps = (state) => {
    return ({
        movies: state.movies.movieDb
    })
}

class Index extends Component {
    componentDidMount() {
        (this.props.data.type) ? this.props.sreachTypeMovie(this.props.data.type) : (this.props.data.group) ? this.props.sreachGroupMovie(this.props.data.group) : this.props.fetchMovie()
    }
    render() {
        return (
            <div className='container' style={{paddingTop:'80px'}}>
                <div className='row'>
                    <Left title={this.props.title} data={this.props.movies}/>
                    <Right data={this.props}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { fetchMovie, sreachTypeMovie, sreachGroupMovie })(Index)