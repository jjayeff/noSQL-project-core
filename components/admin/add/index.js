import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMovie } from '../../../reduxModules/movie'
import Add from './Add'

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
                    <Add title={this.props.title} data={this.props}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { createMovie })(Index)