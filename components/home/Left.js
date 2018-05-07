import React from 'react'
import CardMovie from './CardMovie'

export default class Left extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total:       0,
            current:     1,
            visiblePage: 16,
            setState: true
        }
        this.setPage = this.setPage.bind(this)
        this.handleNextPage = this.handleNextPage.bind(this)
        this.handlePevPage = this.handlePevPage.bind(this)
    }

    setPage(totalPage) {
        this.setState({ total : totalPage, setState: false })
    }

    handlePageChanged(newPage) {
        this.setState({ current : newPage })
    }

    handleNextPage() {
        this.setState({ current : this.state.current + 1 })
    }

    handlePevPage() {
        this.setState({ current : this.state.current - 1 })
    }

    range(start, stop, step) {
        var sum = start
        var err = 0
        var nums = []
        while (sum < stop) {
          nums.push(sum)
          err = step - (((sum + step + err) - sum) - err)
          sum = sum + step + err
        }
        return nums
    }

    renderNumberPage() {
        if(this.state.current < 6 && this.state.total > 6) {
            const datas = this.range(1, 10, 1) 
            return datas.map(data =>
                <li className={(data === this.state.current)?'page-item active':'page-item'} key={data}>
                    <a className="page-link" onClick={this.handlePageChanged.bind(this, data)}>{data}</a>
                </li>
            )
        }
        else if(this.state.current >= this.state.total - 4 && this.state.total > 6) {
            const datas = this.range(this.state.current - 3, this.state.total + 1, 1) 
            return datas.map(data =>
                <li className={(data === this.state.current)?'page-item active':'page-item'} key={data}>
                    <a className="page-link" onClick={this.handlePageChanged.bind(this, data)}>{data}</a>
                </li>
            )
        }
        else if(this.state.total > 6) {
            const datas = this.range(this.state.current - 3, this.state.current + 4, 1)
            return datas.map(data =>
                <li className={(data === this.state.current)?'page-item active':'page-item'} key={data}>
                    <a className="page-link" onClick={this.handlePageChanged.bind(this, data)}>{data}</a>
                </li>
            )
        }
        else if(this.state.total > 0) {
            const datas = this.range(1, this.state.total + 1, 1)
            return datas.map(data =>
                <li className={(data === this.state.current)?'page-item active':'page-item'} key={data}>
                    <a className="page-link" onClick={this.handlePageChanged.bind(this, data)}>{data}</a>
                </li>
            )
        }

    }

    renderPagination() {
        if(this.state.total < 6) {
            return (
                <div className="pagination center">
                    <ul className="pagination">
                        {this.renderNumberPage()}
                    </ul>
                </div>
            )
        }
        else if(this.state.current < 6 && this.state.current != 1) {
            return (
                <div className="pagination center">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link"  onClick={this.handlePevPage}>ก่อนหน้านี้</a>
                        </li>
                        {this.renderNumberPage()}
                        <li className="page-item">
                            <a className="page-link">...</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">{this.state.total}</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" onClick={this.handleNextPage}>ถัดไป</a>
                        </li>
                    </ul>
                </div>
            )
        }
        else if(this.state.current > this.state.total - 4 && this.state.current != this.state.total) {
            return (
                <div className="pagination center">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link"  onClick={this.handlePevPage}>ก่อนหน้านี้</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" onClick={this.handlePageChanged.bind(this, 1)}>1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">...</a>
                        </li>
                        {this.renderNumberPage()}
                        <li className="page-item">
                            <a className="page-link" onClick={this.handleNextPage}>ถัดไป</a>
                        </li>
                    </ul>
                </div>
            )
        }
        else if(this.state.current == this.state.total) {
            return (
                <div className="pagination center">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link"  onClick={this.handlePevPage}>ก่อนหน้านี้</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" onClick={this.handlePageChanged.bind(this, 1)}>1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">...</a>
                        </li>
                        {this.renderNumberPage()}
                    </ul>
                </div>
            )
        }
        else if(this.state.current == 1) {
            return (
                <div className="pagination center">
                    <ul className="pagination">
                        {this.renderNumberPage()}
                        <li className="page-item">
                            <a className="page-link">...</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">{this.state.total}</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" onClick={this.handleNextPage}>ถัดไป</a>
                        </li>
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div className="pagination center">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link"  onClick={this.handlePevPage}>ก่อนหน้านี้</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" onClick={this.handlePageChanged.bind(this, 1)}>1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">...</a>
                        </li>
                        {this.renderNumberPage()}
                        <li className="page-item">
                            <a className="page-link">...</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" onClick={this.handlePageChanged.bind(this, this.state.total)}>{this.state.total}</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link"  onClick={this.handleNextPage}>ถัดไป</a>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    setDefault() {
        const { setState, visiblePage, current} = this.state   
        if(setState && this.props.data.length != 0) this.setPage(Math.ceil(this.props.data.length / visiblePage))
        const a = current + (visiblePage * (current - 1)) - 1
        const b = current + (visiblePage * current) - 1
        return this.props.data.slice(a,b)
    }

    render() {
        const data = this.setDefault()
        return (
            <div className='col-lg-9 col-md-8 col-sm-6'>
                <div className='bs-component'>        
                    <div className='card border-secondary mb-3'>
                        <div className='card-header'>{this.props.title}</div>
                        <div className='card-body'>
                            <div className='row'>
                                <CardMovie data={data}/>
                            </div>
                        </div>
                        <div className='card-footer'>
                            {this.renderPagination()}
                        </div>
                    </div>
                </div>         
            </div>
        )
    }
}