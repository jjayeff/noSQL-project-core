import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editMovie, fetchMovie } from '../../../reduxModules/movie'
import Edit from './Edit'

const mapStateToProps = (state) => {
    return ({
        loading: state.movies.loading
    })
}

class Index extends Component {
    render() {
        return (
            <div className='container' style={{paddingTop:'80px'}}>
                <div className='row'>
                    <Edit title={this.props.title} data={this.props}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { editMovie })(Index)