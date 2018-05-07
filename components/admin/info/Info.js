import TableMovie from './TableMovie'

const Info = (props) => (
    <div className='col-lg-12 col-md-12 col-sm-12'>
        <div className='bs-component'>        
            <div className='card border-secondary mb-3'>
                <div className='card-header'>{props.title}</div>
                <div className='card-body'>
                    <div className='row'>
                        <TableMovie data={props.data} />
                    </div>
                </div>
                <div className='card-footer' />
            </div>
        </div>            
    </div>
)

export default Info