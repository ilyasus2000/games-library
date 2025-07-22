import './Card.css'

export const Card = ({ value, isFlipped, onClick }) => {
  return (
    <div className='card' onClick={onClick}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className='card-front'> ? </div>
        <div className='card-back'>{value}</div>
      </div>
    </div>
  )
}
