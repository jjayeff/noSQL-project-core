import React, { Component } from 'react'

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: 1,
            sound: 'thai'
        }
    }
    handleSelectPlayer(data ,e) {
        e.preventDefault()
        this.setState({
            player: data
        })
    }
    handleSelectSound(data ,e) {
        e.preventDefault()
        this.setState({
            sound: data,
            player: 1
        })
    }
    renderSound(data) {
        if(data.videosThai && data.videosEng) {
            return (
                <div className='col-xs-1 text-center pb-3'>
                    <button type='button' className={`btn btn-outline-success mr-2 ${(this.state.sound === 'thai') ? 'active': ''}`} onClick={this.handleSelectSound.bind(this, 'thai')}> พากย์ไทย </button>
                    <button type='button' className={`btn btn-outline-success mr-2 ${(this.state.sound === 'eng') ? 'active': ''}`} onClick={this.handleSelectSound.bind(this, 'eng')}> Soundtrack ซับไทย </button>
                </div>
            )
        } else if(data.videosThai) {
            return (
                <div className='col-xs-1 text-center pb-3'>
                    <button type='button' className={`btn btn-outline-success mr-2 ${(this.state.sound === 'thai') ? 'active': ''}`} onClick={this.handleSelectSound.bind(this, 'thai')}> พากย์ไทย </button>
                </div>
            )
        } else if(data.videosEng) {
            return (
                <div className='col-xs-1 text-center pb-3'>
                    <button type='button' className={`btn btn-outline-success mr-2 ${(this.state.sound === 'eng') ? 'active': ''}`} onClick={this.handleSelectSound.bind(this, 'eng')}> Soundtrack ซับไทย </button>
                </div>
            )
        }
    }
    renderPlayer(datas) {
        if(this.state.sound === 'eng') {
            if(typeof datas.videosEng != 'string') {
                return datas.videosEng.map((data, index) => 
                    <button type='button' className={`btn btn-outline-success mr-2 ${(this.state.player === index + 1) ? 'active': ''}`} onClick={this.handleSelectPlayer.bind(this, index + 1)} key={index}> Player {index + 1} </button>
                )
            } else {
                return (
                    <button type='button' className='btn btn-outline-success mr-2 active' onClick={this.handleSelectPlayer.bind(this, 1)} > Player 1 </button>
                )
            }
            
        } else if(this.state.sound === 'thai') {
            if(typeof datas.videosThai != 'string') {
                return datas.videosThai.map((data, index) => 
                    <button type='button' className={`btn btn-outline-success mr-2 ${(this.state.player === index + 1) ? 'active': ''}`} onClick={this.handleSelectPlayer.bind(this, index + 1)} key={index}> Player {index + 1} </button>
                )
            } else {
                return (
                    <button type='button' className='btn btn-outline-success mr-2 active' onClick={this.handleSelectPlayer.bind(this, 1)} > Player 1 </button>
                )
            }
            
        }
    }
    renderVideoPlaying(data) {
        let path = ''
        if(this.state.sound === 'thai') {
            (typeof data.videosThai != 'string')? path = data.videosThai[this.state.player - 1] : path = data.videosThai
        } else if(this.state.sound === 'eng') {
            (typeof data.videosEng != 'string')? path = data.videosEng[this.state.player - 1] : path = data.videosEng
        }
        return (
            <div className='container text-center'>
                <img src={path} width='400'/>
            </div>
        )
    }
    render() {
        return (
            (
                <div className='bs-component'>        
                    <div className='card border-secondary mb-3'>
                        <p className='text-center bold pt-2'><a className='mr-2' href='#'>ดูหนังออนไลน์</a>{this.props.data.name} ( {this.props.data.year} )</p>
                        {this.renderSound(this.props.data)}
                        {this.renderVideoPlaying(this.props.data)}
                        <div className='col-xs-1 text-center pt-3 pb-3'>
                            {this.renderPlayer(this.props.data)}
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default Video