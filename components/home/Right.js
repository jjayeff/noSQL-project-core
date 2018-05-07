import Link from 'next/link'
import Group from '../Group'
import Type from '../Type'

const Right = (props) => (
    <div className='col-lg-3 col-md-4 col-sm-6'>
        <Group data={props.data.sreachGroupMovie}/>
        <Type data={props.data.sreachTypeMovie}/>               
    </div>
)

export default Right