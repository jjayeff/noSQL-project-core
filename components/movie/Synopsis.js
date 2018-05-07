const Synopsis = (props) => (
    <div className='movie-synopsis'>
        <h5 className='text-center text-success'>เรื่องย่อ</h5>
        <p className='text-center pl-5 pr-5'>{props.data.synopsis}</p>
    </div>
)

export default Synopsis