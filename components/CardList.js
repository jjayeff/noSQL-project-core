import React from 'react'
import Router from 'next/router'
import {
    GROUP,
    CARTOON,
    US,
    ASIAN,
    EPISODE,
    LATEST,
    THAI,
    IMDB
} from '../texts'

class CardList extends React.Component {
    hendleClick(group) {
        if(group == GROUP || group == CARTOON || group == US || group == ASIAN || group == EPISODE || group == LATEST || group == THAI || group == IMDB ) {
            this.props.sreachGroupMovie(group)
            Router.push({
                pathname: '/sreach/group',
                query: { group: group }
            })
        } else {
            this.props.sreachTypeMovie(group)
            Router.push({
                pathname: '/sreach/type',
                query: { type: group }
            })
        }
    }
    renderComponent(groups) {
        return groups.map((group,i) =>
            <li className='list-group-item' key={i}><b><a className='text-success' style={{cursor: 'pointer'}}  onClick={this.hendleClick.bind(this, group)}>{group}</a></b></li> 
        )
    }
    render(){
        return (
            <div className='bs-component'>
                <div className='card mb-3'>
                    <p className='card-header'>{this.props.head}</p>
                    <ul className='list-group list-group-flush'>
                        {this.renderComponent(this.props.data)}
                    </ul> 
                </div>
            </div>
        )
    }
}

export default CardList