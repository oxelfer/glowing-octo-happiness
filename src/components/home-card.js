import './home-card.css';

export default function HomeCard(props) {
  // Card component layout with dynamic info (applied in Home page)
  return (
    <div className='homecard-container'>
      <a className='homecard__anchor' href={`./catalogue/${props.image}`}>
        <picture className='homecard__picture'>
          <img className='homecard__image' src={`./imgs/${props.image}.jpg`} alt='' />
        </picture>
        <h2 className='homecard__title'>{props.text}</h2>
      </a>
      
    </div>
  )
}