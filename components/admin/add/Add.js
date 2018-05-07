import FormMovie from './FormMovie'

const Add = (props) => (
    <div className='col-lg-9 col-md-9 col-sm-9 center container'>
        <div className='bs-component'>        
            <div className='card border-secondary mb-3'>
                <div className='card-header'>{props.title}</div>
                <div className='card-body'>
                    <div className='container center'>
                        <FormMovie data={props.data}/>
                    </div>
                </div>
                <div className='card-footer' />
            </div>
        </div>            
    </div>
)

export default Add