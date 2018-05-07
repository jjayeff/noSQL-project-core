const Trailer = (props) => (
    <div className='row'>
        <div className='col-lg-3'>
            <img src={props.data.img} />  
        </div>
        <div className='col-lg-9'>
            <iframe src={props.data.trailer} allowFullScreen></iframe>
        </div>
    </div>
)

export default Trailer