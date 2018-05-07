import React from 'react'
import Router from 'next/router'
import { types, years, groups } from '../../../data'

class FormMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Iron Man 3 มหาประลัย คนเกราะเหล็ก 3',
            imdb: '7.2',
            img: 'https://www.movie2free.com/wp-content/uploads/thumb/ironman3-230x300.jpg',
            year: '2018',
            type: ["Action บู๊","Adventure ผจญภัย","Sci-Fi วิทยาศาสตร์"],
            actors: [],
            actorName1: 'โรเบิร์ต ดาวนีย์ จูเนียร์',
            actorName2: 'กวินเน็ธ พัลโทรว์',
            actorName3: 'ดอน ชีเดล',
            actorName4: 'กาย เพียร์ซ',
            actorAge1: '53',
            actorAge2: '45',
            actorAge3: '42',
            actorAge4: '50',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeType = this.handleChangeType.bind(this)
        this.handleChangeGroup = this.handleChangeGroup.bind(this)
    }
    
    handleChange(type, e) {
        var myobj = JSON.parse(`{ "${type}":"${e.target.value}" }`)
        this.setState(myobj)
    }

    handleChangeType(e) {
        this.setState({
            type: [...this.state.type, e.target.value]
        })
    }

    handleChangeGroup(e) {
        this.setState({
            group: [...this.state.group, e.target.value]
        })
    }
    
    async handleSubmit(e) {
        e.preventDefault()
        if(this.state.actorName1 != '') await this.setState({actors: [...this.state.actors, {name:this.state.actorName1,age:this.state.actorAge1}]})
        if(this.state.actorName2 != '') await this.setState({actors: [...this.state.actors, {name:this.state.actorName2,age:this.state.actorAge2}]})
        if(this.state.actorName3 != '') await this.setState({actors: [...this.state.actors, {name:this.state.actorName3,age:this.state.actorAge3}]})
        if(this.state.actorName4 != '') await this.setState({actors: [...this.state.actors, {name:this.state.actorName4,age:this.state.actorAge4}]})
        if(this.state.type.length === 0) await this.setState({type: [...this.state.type, 'ไม่มีหมวดหมู่']})
        if (confirm('Are you sure ?!')) {
            Router.reload()
            this.props.data.createMovie(this.state)
            Router.push('/')
        }
    }
    renderComponentRadioType(datas){
        return datas.map((data, index) => 
            <div className="col-lg-4" key={index}>
                <label className="form-check-label" style={{paddingLeft:'25px'}}>
                    <input type="radio" className="form-check-input" value={data} onChange={this.handleChangeType}/>{data}
                </label>
            </div>
        )
    }
    renderComponentRadioGroup(datas){
        return datas.map((data, index) => 
            <div className="col-lg-4" key={index}>
                <label className="form-check-label" style={{paddingLeft:'25px'}}>
                    <input type="radio" className="form-check-input" value={data} onChange={this.handleChangeGroup}/>{data}
                </label>
            </div>
        )
    }
    renderComponentYears(datas){
        return datas.map((data, index) => <option key={index}>{data}</option>)
    }
    render(){
        return (
            <div className="bs-component">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <label>* ชื่อหนัง</label>
                            <input type="text" className="form-control" placeholder="ชื่อหนังภาษาไทย + ภาษาอังกฤษ" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-3">
                                <label>* IMDB</label>
                                <input type="number" className="form-control" placeholder="คะแนนตัวเลข" min="0" max="10" step="0.1" value={this.state.imdb} onChange={this.handleChange.bind(this, 'imdb')} />
                            </div>
                            <div className="col-lg-3">
                                <label>* ปี</label>
                                <select className="form-control" value={this.state.year} onChange={this.handleChange.bind(this, 'year')} >
                                    {this.renderComponentYears(years)}
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label>* ลิงค์รูปภาพ</label>
                                <input type="text" className="form-control" placeholder="https://www.movie2free.com/wp-content/uploads/thumb/PercyJackson1-230x300.jpg" value={this.state.img} onChange={this.handleChange.bind(this, 'img')} />
                            </div>
                            <div className="col-lg-6 ">
                                
                            </div>
                            <label className="col-lg-12 ">* ประเภทหนัง</label>
                            {this.renderComponentRadioType(types)}
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-7 ">
                                <label>* นักแสดง</label>
                            </div>
                            <div className="col-lg-2 ">
                                <label>* อายุ</label>
                            </div>
                            <div className="col-lg-7 ">
                                <input type="text" className="form-control" placeholder="ชื่อนักแสดง" value={this.state.actorName1} onChange={this.handleChange.bind(this, 'actorName1')}/>
                            </div>
                            <div className="col-lg-2 ">
                                <input type="text" className="form-control" placeholder="อายุ" value={this.state.actorAge1} onChange={this.handleChange.bind(this, 'actorAge1')}/>
                            </div>
                            <div className="col-lg-7 ">
                                <input type="text" className="form-control" placeholder="ชื่อนักแสดง" value={this.state.actorName2} onChange={this.handleChange.bind(this, 'actorName2')}/>
                            </div>
                            <div className="col-lg-2 ">
                                <input type="text" className="form-control" placeholder="อายุ" value={this.state.actorAge2} onChange={this.handleChange.bind(this, 'actorAge2')}/>
                            </div>
                            <div className="col-lg-7 ">
                                <input type="text" className="form-control" placeholder="ชื่อนักแสดง" value={this.state.actorName3} onChange={this.handleChange.bind(this, 'actorName3')}/>
                            </div>
                            <div className="col-lg-2 ">
                                <input type="text" className="form-control" placeholder="อายุ" value={this.state.actorAge3} onChange={this.handleChange.bind(this, 'actorAge3')}/>
                            </div>
                            <div className="col-lg-7 ">
                                <input type="text" className="form-control" placeholder="ชื่อนักแสดง" value={this.state.actorName4} onChange={this.handleChange.bind(this, 'actorName4')}/>
                            </div>
                            <div className="col-lg-2 ">
                                <input type="text" className="form-control" placeholder="อายุ" value={this.state.actorAge4} onChange={this.handleChange.bind(this, 'actorAge4')}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormMovie