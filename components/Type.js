import CardList from './CardList'
import { types } from '../data'
import { TYPE } from '../texts' 

const Type = (props) => (
    <CardList data={types} head={TYPE} sreachTypeMovie={props.data}/>
)

export default Type