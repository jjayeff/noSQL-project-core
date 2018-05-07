import CardList from './CardList'
import { groups } from '../data'
import { GROUP } from '../texts' 

const Group = (props) => (
    <CardList data={groups} head={GROUP} sreachGroupMovie={props.data}/>
)

export default Group