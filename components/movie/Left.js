import Trailer from './Trailer'
import Synopsis from './Synopsis'
import Video from './Video'

const Left = (props) => (
    <div className='col-lg-9 col-md-8 col-sm-6'>
        <div className='bs-component'>        
            <div className='card border-secondary mb-3'>
                <div className='card-header'>{props.data.name} ( {props.data.year} )</div>
                <div className='card-body'>
                    <div className='movie-trailer'>
                        <Trailer data={props.data} />
                        <Synopsis data={props.data} />
                        <Video data={props.data} />
                    </div>
                </div>
            </div>
        </div>         
    </div>
)

export default Left