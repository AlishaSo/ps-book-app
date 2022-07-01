export default function Book(props) {
  return (
    <div className='book'>
      <h2 className='book-title'>{props.title}</h2>
      <div className='book-container'>
        <div className='img-div'>
          <img className='book-img' src={props.img} alt=''/>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  )
}